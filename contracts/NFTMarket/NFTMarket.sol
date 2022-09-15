// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract NFTMarket is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;


    // Marketplace owner address
    address payable owner;
    
    // Marketplace lising price, can also serve as commision
    uint256 listingPrice = 0.1 ether;

    constructor() {
        owner = payable(msg.sender);
    }

    struct MarketItem {
        uint itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    // Map of all the items available on the market by count (1:MarketItem, 2:MarketItem, etc..)
    mapping(uint256 => MarketItem) private idToMarketItem;
    
    event MarketItemCreated (
        uint indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner
    );


    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    function createMarketItem(address nftContract, uint256 tokenId, uint price) public payable nonReentrant {
        // Validate request data
        require(price > 0,"Price must be at least 1 wei");
        require(msg.value == listingPrice,"Price must be equal to listing price");

        // Update market items indexing
        _itemIds.increment();
        uint256 itemId = _itemIds.current();

        // Update market items hash map
        idToMarketItem[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            payable(msg.sender),
            payable(address(0)),
            price,
            false
        );

        // Transfer NFT ownership to the market contract, which will eventually transfer to the next buyer
        IERC721(nftContract).transferFrom(msg.sender,address(this),tokenId);

        emit MarketItemCreated(itemId, nftContract ,tokenId ,msg.sender ,address(0));
    }

    function createMarketSale(address nftContract, uint256 itemId) public payable nonReentrant {
        // Current market item properties
        uint price = idToMarketItem[itemId].price;
        uint tokenId = idToMarketItem[itemId].tokenId;

        require(msg.value == price, "Please submit the asking price in order to complete the purchase");
        
        // Transfer the accepted price to seller address
        idToMarketItem[itemId].seller.transfer(msg.value);

        // Transfer ownership of the NFT from the marketplace contract to the buyer
        IERC721(nftContract).transferFrom(address(this),msg.sender,tokenId);

        // Update market item properties
        idToMarketItem[itemId].owner = payable(msg.sender);
        idToMarketItem[itemId].sold = true;
        _itemsSold.increment();

        // Pay comission to the marketplace owner
        payable(owner).transfer(listingPrice);

    }

    /// @notice This function will fetch all the unsold market items
    /// @return unsoldItemsArr is an array of all the unsold market items
    
    function fetchUnsoldItems() public view returns(MarketItem[] memory) {

        // Counter of total items created on market
        uint itemCount = _itemIds.current();

        // Counter of total unsold items on market
        uint unsoldItemsCount = _itemIds.current() - _itemsSold.current();

        // Unsold items index
        uint currentIndex = 0;

        // Total unsold market items array
        MarketItem[] memory unsoldItemsArr = new MarketItem[](unsoldItemsCount);

        // Find the unsold items and add him to unsoldItemsArr
        for(uint i = 0; i < itemCount ;i++) {
            if(idToMarketItem[i+1].owner == address(0)) {
                uint currentId = idToMarketItem[i+1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                unsoldItemsArr[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        
        return unsoldItemsArr;
    }

    /// @notice This function will fetch the NFTs that the user purchased
    /// @return purchasedItemsArr is an array of all the NFTs the user has purchased
    
    function fetchItemsPurchased() public view returns(MarketItem[] memory) {

        // Counter of total items created on market
        uint totalItemCount = _itemIds.current();

        // Counter of total items purchased by user
        uint itemCount = 0;

        // Purchased items index
        uint purchasedItemsIndex = 0;

        // Find the length of array of items that was purchased by the user
        for(uint i = 0; i < totalItemCount; i++) {
            if(idToMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }


        MarketItem[] memory purchasedItemsArr = new MarketItem[](itemCount);

        // Find the item created by the user and add him to purchasedItemsArr 
        for(uint i = 0; i < itemCount; i++) {
            if(idToMarketItem[i + 1].owner == msg.sender) {
                uint currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                purchasedItemsArr[purchasedItemsIndex] = currentItem;
                purchasedItemsIndex += 1;
            }
        }
        return purchasedItemsArr;
    }

    /// @notice This function will fetch the NFTs that the user created
    /// @return createdItemsArr is an array of all the NFTs the user has created 
    
    function fetchItemsCreated() public view returns(MarketItem[] memory) {

        // Counter of total items created on market
        uint totalItemCount = _itemIds.current();

        // Counter of total items created by user
        uint itemCount = 0;

        // Created items index
        uint createdItemsIndex = 0;

        // Find the length of array of items that was created by the user
        for(uint i = 0; i < totalItemCount; i++) {
            if(idToMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory createdItemsArr = new MarketItem[](itemCount);

        // Find the current item and add him to createdItemsArr
        for(uint i = 0; i < itemCount; i++) {
            if(idToMarketItem[i + 1].seller == msg.sender) {
                uint currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                createdItemsArr[createdItemsIndex] = currentItem;
                createdItemsIndex += 1;
            }
        }
        return createdItemsArr;
    }

}

/// @dev notes:
/// - address(0) is an empty address, which in our case means no owners.
/// - address(this) is marketplace smart contract address.
/// - "MarketItem[] memory" is an array that will reset once the function execution ends.
/// - "MarketItem storage" is an object that once you change it it'll update the contract state.
/// - "public view" is mostly used for fetching data functions.
/// - "public payable" is mostly used for payments transfer.
/// - "nonReentrant" is the ReentrancyGuard modifier that controlls the function entrancy state.
