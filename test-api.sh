#!/bin/bash
# Test API endpoints

BASE_URL="http://localhost:5003"

echo "Testing API endpoints..."
echo "========================"

echo -e "\n1. Testing audio tracks endpoint:"
curl -s "${BASE_URL}/api/content/audio-tracks" | jq '.' | head -20

echo -e "\n2. Testing leaf cards endpoint:"
curl -s "${BASE_URL}/api/content/leaf-cards" | jq '.' | head -20

echo -e "\n3. Testing oracle suggestions endpoint:"
curl -s "${BASE_URL}/api/content/oracle-suggestions" | jq '.'

echo -e "\n4. Testing zodiac data endpoint:"
curl -s "${BASE_URL}/api/content/zodiac" | jq '.' | head -20

echo -e "\n5. Testing zodiac by star endpoint (Aquarius):"
curl -s "${BASE_URL}/api/content/zodiac/Aquarius" | jq '.'

echo -e "\nDone!"
