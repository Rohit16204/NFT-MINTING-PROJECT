/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code 
// 1. Create a variable to hold your NFTs
let nftCollection = [];

// 2. This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
    // Create an NFT object
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    
    // Store the NFT object in the collection
    nftCollection.push(nft);
}

// 3. Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    // Loop through the array and print each NFT's metadata
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(`NFT #${i + 1}`);
        console.log(`Name: ${nftCollection[i].name}`);
        console.log(`Eye Color: ${nftCollection[i].eyeColor}`);
        console.log(`Shirt Type: ${nftCollection[i].shirtType}`);
        console.log(`Bling: ${nftCollection[i].bling}`);
        console.log('--------------------------');
    }
}

// 4. Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Call your functions below this line

// Mint a few NFTs
mintNFT("Cool Cat", "Blue", "T-Shirt", "Gold Chain");
mintNFT("Hip Hop Hippo", "Brown", "Hoodie", "Diamond Ring");
mintNFT("Jazz Giraffe", "Green", "Suit", "Silver Watch");

// List all NFTs
listNFTs();

// Print the total number of NFTs
