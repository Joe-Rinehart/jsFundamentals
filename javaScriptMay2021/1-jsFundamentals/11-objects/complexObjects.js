let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day Sale'},
                {episode: 9, episodeName: 'All-Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'},
                
            ]
        }
    },
    season2: {},
    season3: {},
}

console.log(netflix);
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName)

//Pick an episode to log in the terminal
//Using dot notation, walk through the netflix object and print off both the episode number and the episode name

console.log(netflix.season1.seasonInfo.episodeInfo[0].episode, netflix.season1.seasonInfo.episodeInfo[0].episodeName)
