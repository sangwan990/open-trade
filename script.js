// API to fetch live market data (You can replace this with any market data API)
const marketDataContainer = document.getElementById('liveMarketData');

// Example API URL for crypto prices (you can replace with your own)
const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd';

async function fetchMarketData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display live data
        const marketInfo = `
            <p><strong>Bitcoin:</strong> $${data.bitcoin.usd}</p>
            <p><strong>Ethereum:</strong> $${data.ethereum.usd}</p>
        `;
        marketDataContainer.innerHTML = marketInfo;
    } catch (error) {
        marketDataContainer.innerHTML = '<p>Error fetching market data</p>';
    }
}

// Call the function to load live data
fetchMarketData();
