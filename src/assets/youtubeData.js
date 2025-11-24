import axios from 'axios';

const ytData = {
    channelInfo: {
        name: "MOMO SLIMES",
        icon_url: "/assets/profile.jpg",
        detail: ['www.momoslimes.com | Restock every Sunday @5pm EST✨', 'Instagram: @momoslimes_'],
    },
    getData() {
        const params = {
            key       : process.env.VUE_APP_YOUTUBE_API_KEY,
            part      : 'snippet,contentDetails',
            playlistId: 'UUxkTLF3shX3CGlRQJ4gj_4Q',
        };


        return axios.get('https://www.googleapis.com/youtube/v3/playlistItems'
            , {
                 params : params
        }).then(response => {
            let list = this.setPlayList(response.data.items);
            return list;
        }).catch(error => {
            console.error('Error fetching YouTube data:', error);
        });
    },
    setPlayList(items) {
        let list = [];
        items.forEach(item => {
            list.push({
                title        : item.snippet.title,
                thumbnail_url: item.snippet.thumbnails.high.url,
                date         : new Date(item.snippet.publishedAt).toLocaleDateString(),
                videoId      : item.snippet.resourceId.videoId,
            });
        });
        return list;
    },

};

export default ytData;
