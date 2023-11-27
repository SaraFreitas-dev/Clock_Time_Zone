function updateTime(countryId, hrsId, minId, secId, timeZone) {
    let hrs = document.getElementById(hrsId);
    let min = document.getElementById(minId);
    let sec = document.getElementById(secId);

    setInterval(() => {
        let countryTime = new Date().toLocaleTimeString('en-US', { timeZone: timeZone, hour12: false  });
        let [hours, minutes, seconds] = countryTime.split(":");
        
        hrs.innerHTML = hours;
        min.innerHTML = minutes + (hours < 12 ? " am" : " pm");
        sec.innerHTML = seconds;

    }, 1000);
}


updateTime("frClock", "frHrs", "frMin", "sec", "Europe/Paris"); // Time zone for France
updateTime("ptClock", "ptHrs", "ptMin", "sec", "Europe/Lisbon"); // Time zone for Oporto
updateTime("nwClock", "nwHrs", "nwMin", "sec", "America/New_York"); // Time zone for New York
updateTime("hkClock", "hkHrs", "hkMin", "sec", "Asia/Hong_Kong"); // Time zone for Hong Kong






/* Function to update time for a specific country
function updateTime(countryId, hrsId, minId, secId, offset) {
    let hrs = document.getElementById(hrsId);
    let min = document.getElementById(minId);
    let sec = document.getElementById(secId);

    setInterval(() => {
        let currentTime = new Date();
        let localTime = currentTime.getTime();
        let localOffset = currentTime.getTimezoneOffset() * 60000;
        let utc = localTime + localOffset;
        let countryTime = utc + (3600000 * offset);

        let countryCurrentTime = new Date(countryTime);

        hrs.innerHTML = (countryCurrentTime.getHours() < 10 ? "0" : "") + countryCurrentTime.getHours();
        min.innerHTML = (countryCurrentTime.getMinutes() < 10 ? "0" : "") + countryCurrentTime.getMinutes();
        sec.innerHTML = (countryCurrentTime.getSeconds() < 10 ? "0" : "") + countryCurrentTime.getSeconds();

    }, 1000);
}

// Update time for each country
updateTime("frClock", "frHrs", "frMin", "sec", 1); // Example offset for France
updateTime("ptClock", "ptHrs", "ptMin", "sec", 0); // Example offset for Oporto
updateTime("nwClock", "nwHrs", "nwMin", "sec", -5); // Example offset for New York
updateTime("hkClock", "hkHrs", "hkMin", "sec", 8); // Example offset for Hong Kong


*/
