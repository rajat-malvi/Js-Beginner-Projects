// const APIS={

// }

let avrarImgAttribute=document.querySelector("#avtar-img")
let musicPlayBtn=document.querySelector("#music-link");

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '34effcbd40mshff0b44100061139p17fa91jsna1ad49221bdc',
		'x-rapidapi-host': 'spotify-web2.p.rapidapi.com'
	}
};

let api='https://spotify-web2.p.rapidapi.com/album_metadata/?id=3IBcauSj5M2A6lTeffJzdv'


function getAlbum(){
    // let album
    let responce=fetch(api,options);
    console.log(responce);
    responce.then((data)=>{
        return data.json()
    }).then((jsonData)=>{
        let albumDto=jsonData['data']
        let album=albumDto.album;
        let sheredUrl=album.artists.items[0].sharingInfo.shareUrl;
        musicPlayBtn.setAttribute('href',sheredUrl)
        console.log(sheredUrl);

        let avtarImg=album.artists.items[0].visuals.avatarImage.sources[0].url;
        avrarImgAttribute.setAttribute('src',avtarImg)

        console.log(avtarImg);

    }).catch((err)=>{
        console.error(err);
    })
}
getAlbum()



// artists-> items[0]-> #sharingInfo['shareUrl'] ->
// #visuals -> avatarImage-> sources_>array[0,1,2]


// coverArt->extractedColors->colorRaw->hex


// moreAlbumsByArtist-> items[0]->


// playability-> ? prototype

// tracks->items.foreach()