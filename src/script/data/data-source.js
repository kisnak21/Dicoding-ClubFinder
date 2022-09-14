import clubs from "./clubs.js"

class DataSource {
    static searchClub(keyword) {
        return new Promise((resolve, rejected)=> {
            const filteredClubs = clubs.filter(
                club => club.name.toUpperCase().includes(keyword.toUpperCase())
            );
    
            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                rejected(`${keyword} is not found`);
            }
        }
        
    )}
};

export default DataSource;