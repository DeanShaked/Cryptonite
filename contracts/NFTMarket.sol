// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract NFTMarket is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemSold;


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
        const itemId = _itemIds.current();

        // Update market items hash map, refering to address as address(0) => empty address => no owners 
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

        emit MarketItemCreated(itemId, nftContract ,tokenId ,msg.sender ,address(0) ,price ,false);
    }

    function createMarketSale(address nftContract, uint256 itemId) public payable nonReentrant {
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
        _itemSold.increment();

        // Pay the owner of the contract
        payable(owner).transfer(listingPrice);

    }

}
