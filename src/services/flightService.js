// src/services/flightService.js

// Configuration for API (This is an example using Amadeus structure)
// Si aad u isticmaasho API dhab ah (sida Amadeus), waa inaad iska diiwaangelisaa oo aad heshaa API Key iyo Secret.
// To use a real API like Amadeus, obtain a Key and Secret.

const API_CONFIG = {
    clientId: import.meta.env.VITE_AMADEUS_CLIENT_ID || '', // Leave empty to use Mock data
    clientSecret: import.meta.env.VITE_AMADEUS_CLIENT_SECRET || '',
    authUrl: 'https://test.api.amadeus.com/v1/security/oauth2/token',
    baseUrl: 'https://test.api.amadeus.com/v2'
};

const MOCK_FLIGHTS = [
    { id: 1, airline: 'Airzo Airways', flightNumber: 'AZ-101', fromCode: 'LHR', toCode: 'JFK', departure: '10:30', arrival: '13:45', duration: '7h 15m', stops: 'Non-stop', price: 450 },
    { id: 2, airline: 'SkyHigh', flightNumber: 'SH-202', fromCode: 'DXB', toCode: 'LHR', departure: '14:00', arrival: '17:30', duration: '7h 30m', stops: 'Non-stop', price: 420 },
    { id: 3, airline: 'Oceanic', flightNumber: 'OC-815', fromCode: 'SIN', toCode: 'TYO', departure: '08:15', arrival: '14:45', duration: '10h 30m', stops: '1 Stop', price: 380 },
    { id: 4, airline: 'GlobalAir', flightNumber: 'GA-555', fromCode: 'LAX', toCode: 'SYD', departure: '18:20', arrival: '21:50', duration: '14h 30m', stops: 'Non-stop', price: 510 },
    { id: 5, airline: 'BudgetFly', flightNumber: 'BF-009', fromCode: 'CDG', toCode: 'BER', departure: '06:00', arrival: '07:30', duration: '1h 30m', stops: 'Non-stop', price: 120 },
];

// Helper to get Access Token
const getAccessToken = async () => {
    if (!API_CONFIG.clientId || !API_CONFIG.clientSecret) return null;

    try {
        const response = await fetch(API_CONFIG.authUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `grant_type=client_credentials&client_id=${API_CONFIG.clientId}&client_secret=${API_CONFIG.clientSecret}`
        });
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Error fetching token:", error);
        return null;
    }
};

export const searchFlights = async (searchParams) => {
    const { from, to, depart, returnDate, passengers } = searchParams;

    // Check if we have API keys configured
    if (API_CONFIG.clientId) {
        try {
            const token = await getAccessToken();
            if (token) {
                // Example call to Amadeus Flight Offers Search
                // Note: You need to send IATA codes (e.g., LHR, JFK). 
                // In a real app, you'd convert City names to IATA codes first.
                const url = `${API_CONFIG.baseUrl}/shopping/flight-offers?originLocationCode=${from.substring(0, 3).toUpperCase()}&destinationLocationCode=${to.substring(0, 3).toUpperCase()}&departureDate=${depart}&adults=${passengers}&max=10`;

                const response = await fetch(url, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                if (response.ok) {
                    const data = await response.json();
                    // Basic mapping of Amadeus response to our app structure
                    // This is a simplified mapping. Real API response is complex.
                    return data.data.map((offer, index) => ({
                        id: offer.id,
                        airline: offer.validatingAirlineCodes[0], // Simplified
                        flightNumber: `FL-${offer.id}`,
                        fromCode: from.substring(0, 3).toUpperCase(),
                        toCode: to.substring(0, 3).toUpperCase(),
                        departure: offer.itineraries[0].segments[0].departure.at.split('T')[1].substring(0, 5),
                        arrival: offer.itineraries[0].segments[0].arrival.at.split('T')[1].substring(0, 5),
                        duration: offer.itineraries[0].duration.replace('PT', ''),
                        stops: offer.itineraries[0].segments.length > 1 ? `${offer.itineraries[0].segments.length - 1} Stop` : 'Non-stop',
                        price: offer.price.total
                    }));
                }
            }
        } catch (error) {
            console.error("API Call failed, falling back to mock data", error);
        }
    }

    // Fallback Mock Data (Simulated Delay)
    return new Promise((resolve) => {
        setTimeout(() => {
            // Dynamic mock generation based on search
            const originCode = from ? from.substring(0, 3).toUpperCase() : 'LGS';
            const destCode = to ? to.substring(0, 3).toUpperCase() : 'MOG';

            const results = MOCK_FLIGHTS.map(f => ({
                ...f,
                fromCode: originCode,
                toCode: destCode,
                // Randomize price slightly based on passengers
                price: f.price * (passengers || 1)
            }));

            resolve(results);
        }, 1500); // 1.5s artificial delay
    });
};
