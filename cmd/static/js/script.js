// Let's select all required tags or elements
const wrapper = document.querySelector(".wrapper");
const advicesWrapper = document.querySelector(".advices-wrapper");




musicList = wrapper.querySelector(".music-list");
advicesList = wrapper.querySelector(".advices-list");

musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicDate = wrapper.querySelector(".song-details .date"),
mainAudio = wrapper.querySelector("#main-audio"),
playPauseBtn = wrapper.querySelector(".play-pause");
prevBtn = wrapper.querySelector("#prev"),
nextBtn = wrapper.querySelector("#next");
progressArea = wrapper.querySelector(".progress-area");
progressBar = wrapper.querySelector(".progress-bar");
musicList = wrapper.querySelector(".music-list");
advicesList = wrapper.querySelector(".advices-list");
showMoreBtn = wrapper.querySelector("#more-music");
hideMusicBtn = musicList.querySelector("#close");


let musicIndex = 1;

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);//calling load music function once window loaded
    playingNow();
    playingNow1();
    // Select all filter buttons and filterable advices list
    const filterButtons = document.querySelectorAll(".filters-wrappers button");
    const filterableAdviceList = document.querySelectorAll(".advices-wrapper .advices-list ul .advice");
    //console.log(filterButtons, filterableAdviceList)

// Define filter list
    const filterList = e => {
        document.querySelector(".active").classList.remove("active");
        
        e.target.classList.add("active");

        

        filterableAdviceList.forEach(advice => {
            // Add "hide" class to hide the class initialy
            advice.classList.add("hide")
            
            // Check if the advice matches the selected filter or "all" is selected
            if (advice.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
                advice.classList.remove("hide");
            } 
        })
        
        
    }

// Add click event listener to each filter button
    filterButtons.forEach( button => button.addEventListener("click", filterList));
    const dropdowns1 = document.querySelectorAll(".dropdown1");
    const dropdowns2 = document.querySelectorAll(".dropdown2");
    const dropdowns3 = document.querySelectorAll(".dropdown3");
// Select all filter buttons and filterable advices list
//const filterButtons1 = document.querySelectorAll(".filters-wrappers button");
    const filterableAdviceList1 = document.querySelectorAll(".advices-wrapper .advices-list ul .advice");
    var month = "";
    var year = "";
    var zone = "";

    dropdowns1.forEach(dropdown => {
        const select = dropdown.querySelector(".select");
        const caret = dropdown.querySelector(".caret");
        const choices = dropdown.querySelector(".choices");
        const options = dropdown.querySelectorAll(".choices li");
        const selected = dropdown.querySelector(".selected");

        select.addEventListener("click", () => {
            select.classList.toggle("select-clicked");
            caret.classList.toggle("caret-rotate");
            choices.classList.toggle("choices-open");
            //console.log(dropdown)
            //console.log(filterButtons, filterableAdviceList)
            
        });

        options.forEach( option => {
            option.addEventListener( "click", () => {               
                selected.innerText = option.innerText;
                month = option.innerText;
                console.log(option.innerText);

                
                if (month == option.innerText && zone == "" && year == "") {
                    filterableAdviceList1.forEach(advice => {
                        advice.classList.add("hidden-text1")
                        if (advice.attributes[2].value==month) {
                            advice.classList.remove("hidden-text1")
                        }
                        //console.log(advice.attributes[3].value, advice.attributes[4].value)
                    });
                } else if (month == option.innerText && zone !== "" && year == "") {
                    filterableAdviceList1.forEach(advice => {
                        advice.classList.add("hidden-text1")
                        console.log("It is happening here");
                        if (advice.attributes[2].value==month && advice.attributes[4].value==zone && year == "") {
                            advice.classList.remove("hidden-text1")
                        }
                        //console.log(advice.attributes[3].value, advice.attributes[4].value)
                    });                 
                } else if (month == option.innerText && zone == "" && year !== "") {
                    filterableAdviceList1.forEach(advice => {
                        advice.classList.add("hidden-text1")
                        console.log("It is happening here");
                        if (advice.attributes[2].value==month && advice.attributes[3].value==year && zone == "") {
                            advice.classList.remove("hidden-text1")
                        }
                        //console.log(advice.attributes[3].value, advice.attributes[4].value)
                    });
                } else if (month == option.innerText && zone !== "" && year !== "") {
                    filterableAdviceList1.forEach(advice => {
                        advice.classList.add("hidden-text1")
                        if (advice.attributes[2].value==month && advice.attributes[3].value==year && advice.attributes[4].value==zone) {
                            advice.classList.remove("hidden-text1")
                        }
                    });
                }

                // filterableAdviceList1.forEach(advice => {
                    
                //     advice.classList.remove("show-text1")
                //     advice.classList.remove("hidden-text1")
                //     if (selected.innerText===advice.attributes[2].value) {
                //         advice.classList.add("show-text1")    
                //     }
                //     if (selected.innerText!==advice.attributes[2].value) {
                //         advice.classList.add("hidden-text1")    
                //     }
                //     if (selected.innerText===advice.attributes[3].value) {
                //         //advice.classList.add("hidden-text1")
                //         u = document.querySelector(`.advices-wrapper .advices-list ul .advice[year="${selected.innerText}"]`);
                //         console.log(u,selected.innerText,advice.attributes[3].value);
                //         document.querySelector(`.advices-wrapper .advices-list ul .advice[year="${selected.innerText}"]`).classList.add("hidden-text1");
                //     }
                //     if (selected.innerText===advice.attributes[4].value) {
                //         advice.classList.add("hidden-text1")
                //     }
                // });
                select.classList.remove("select-clicked");
                caret.classList.remove("caret-rotate");
                choices.classList.remove("choices-open");
                options.forEach(option => {
                    option.classList.remove("isactive")
                });
                option.classList.add("isactive");
            });    

        });

    });

    dropdowns2.forEach(dropdown => {
        const select = dropdown.querySelector(".select");
        const caret = dropdown.querySelector(".caret");
        const choices = dropdown.querySelector(".choices");
        const options = dropdown.querySelectorAll(".choices li");
        const selected = dropdown.querySelector(".selected");

        select.addEventListener("click", () => {
            select.classList.toggle("select-clicked");
            caret.classList.toggle("caret-rotate");
            choices.classList.toggle("choices-open");
            //console.log(dropdown)
            //console.log(filterButtons, filterableAdviceList)
            
        });

        options.forEach( option => {
            option.addEventListener( "click", () => {
                selected.innerText = option.innerText;
                year = option.innerText;


                if (year == option.innerText && zone == "" && month == "") {
                    filterableAdviceList1.forEach(advice => {
                        advice.classList.add("hidden-text1")
                        if (advice.attributes[3].value==year) {
                            advice.classList.remove("hidden-text1")
                        }
                        //console.log(advice.attributes[3].value, advice.attributes[4].value)
                    });
                } else if (year == option.innerText && zone !== "" && month == "") {
                    filterableAdviceList1.forEach(advice => {
                        advice.classList.add("hidden-text1")
                        if (advice.attributes[3].value==year && advice.attributes[4].value==zone && month == "") {
                            advice.classList.remove("hidden-text1")
                        }
                        //console.log(advice.attributes[3].value, advice.attributes[4].value)
                    });                 
                } else if (year == option.innerText && zone == "" && month !== "") {
                    filterableAdviceList1.forEach(advice => {
                        advice.classList.add("hidden-text1")
                        if (advice.attributes[3].value==year && advice.attributes[2].value==month && zone == "") {
                            advice.classList.remove("hidden-text1")
                        }
                        //console.log(advice.attributes[3].value, advice.attributes[4].value)
                    });
                } else if (year == option.innerText && zone !== "" && month !== "") {
                    filterableAdviceList1.forEach(advice => {
                        advice.classList.add("hidden-text1")
                        if (advice.attributes[2].value==month && advice.attributes[3].value==year && advice.attributes[4].value==zone) {
                            advice.classList.remove("hidden-text1")
                        }
                    });
                }

                // filterableAdviceList1.forEach(advice => {
                //     if (!advice.classList.contains("hidden-text1")) {
                //         advice.classList.add("hidden-text1")
                //     }
                   

                //     if (selected.innerText===advice.attributes[2].value) {
                //         advice.classList.remove("hidden-text1")
                //     }
                //     if (selected.innerText===advice.attributes[3].value) {
                //         //advice.classList.add("hidden-text1")
                //         u = document.querySelector(`.advices-wrapper .advices-list ul .advice[year="${selected.innerText}"]`);
                //         console.log(u,selected.innerText,advice.attributes[3].value);
                //         document.querySelector(`.advices-wrapper .advices-list ul .advice[year="${selected.innerText}"]`).classList.add("hidden-text1");
                //     }
                //     if (selected.innerText===advice.attributes[4].value) {
                //         advice.classList.add("hidden-text1")
                //     }
                // });
                select.classList.remove("select-clicked");
                caret.classList.remove("caret-rotate");
                choices.classList.remove("choices-open");
                options.forEach(option => {
                    option.classList.remove("isactive")
                });
                option.classList.add("isactive");
            });    

        });

    });

    dropdowns3.forEach(dropdown => {
        const select = dropdown.querySelector(".select");
        const caret = dropdown.querySelector(".caret");
        const choices = dropdown.querySelector(".choices");
        const options = dropdown.querySelectorAll(".choices li");
        const selected = dropdown.querySelector(".selected");

        select.addEventListener("click", () => {
            select.classList.toggle("select-clicked");
            caret.classList.toggle("caret-rotate");
            choices.classList.toggle("choices-open");
            //console.log(dropdown)
            //console.log(filterButtons, filterableAdviceList)
            
        });

        options.forEach( option => {
            option.addEventListener( "click", () => {
                selected.innerText = option.innerText;
                zone = option.innerText;
                

                if (zone == option.innerText && year == "" && month == "") {
                    filterableAdviceList1.forEach(advice => {
                        advice.classList.add("hidden-text1")
                        if ( advice.attributes[4].value==zone) {
                            advice.classList.remove("hidden-text1")
                        }
                        //console.log(advice.attributes[3].value, advice.attributes[4].value)
                    });
                } else if (zone == option.innerText && year !== "" && month == "") {
                    filterableAdviceList1.forEach(advice => {
                        advice.classList.add("hidden-text1")
                        if (advice.attributes[4].value==zone && advice.attributes[3].value==year && month == "") {
                            advice.classList.remove("hidden-text1")
                        }
                        //console.log(advice.attributes[3].value, advice.attributes[4].value)
                    });                 
                } else if (zone == option.innerText && year == "" && month !== "") {
                    filterableAdviceList1.forEach(advice => {
                        advice.classList.add("hidden-text1")
                        if (advice.attributes[4].value == zone && year == "" && advice.attributes[2].value==month) {
                            advice.classList.remove("hidden-text1")
                        }
                        //console.log(advice.attributes[3].value, advice.attributes[4].value)
                    });
                } else if (zone == option.innerText && year !== "" && month !== "") {
                    filterableAdviceList1.forEach(advice => {
                        advice.classList.add("hidden-text1")
                        if (advice.attributes[2].value==month && advice.attributes[3].value==year && advice.attributes[4].value==zone) {
                            advice.classList.remove("hidden-text1")
                        }
                    });
                }
                

                
                // filterableAdviceList1.forEach(advice => {
                //     if (!advice.classList.contains("hidden-text1")) {
                //         advice.classList.add("hidden-text1")
                //     }
                   

                //     if (selected.innerText===advice.attributes[2].value) {
                //         advice.classList.remove("hidden-text1")
                //     }
                //     if (selected.innerText===advice.attributes[3].value) {
                //         //advice.classList.add("hidden-text1")
                //         u = document.querySelector(`.advices-wrapper .advices-list ul .advice[year="${selected.innerText}"]`);
                //         console.log(u,selected.innerText,advice.attributes[3].value);
                //         document.querySelector(`.advices-wrapper .advices-list ul .advice[year="${selected.innerText}"]`).classList.add("hidden-text1");
                //     }
                //     if (selected.innerText===advice.attributes[4].value) {
                //         advice.classList.add("hidden-text1")
                //     }
                // });
                select.classList.remove("select-clicked");
                caret.classList.remove("caret-rotate");
                choices.classList.remove("choices-open");
                options.forEach(option => {
                    option.classList.remove("isactive")
                });
                option.classList.add("isactive");
            });    

        });

    });

})

// load music function
function loadMusic(indexNumb) {
    musicName.innerHTML = allMusic[indexNumb-1].name;
    musicDate.innerHTML = allMusic[indexNumb-1].date;
    musicImg.src = `cmd/static/images/${allMusic[indexNumb-1].img}.jpeg`;
    mainAudio.src = `cmd/static/songs/${allMusic[indexNumb-1].src}.mp3`;
}

// play Music function
function playMusic() {
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerHTML = "pause";
    mainAudio.play();
}
// pause Music function
function pauseMusic() {
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerHTML = "play_arrow";
    mainAudio.pause();
}
// next Music function
function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex =musicIndex; 
    loadMusic(musicIndex);
    playMusic();
    playingNow();
    playingNow1();
}
// previous Music function
function prevMusic() {
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow();
    playingNow1();
}
// play or pause music button event
playPauseBtn.addEventListener("click", () => {
    const isMusicPaused = wrapper.classList.contains("paused");
    //if isMusicPaused is true then call pauseMusic else call playMusic
    isMusicPaused ? pauseMusic() : playMusic();
})
// play next music
nextBtn.addEventListener("click", () =>{
    nextMusic();
})
// play prev music
prevBtn.addEventListener("click", () =>{
    prevMusic();
})
//update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e)=>{
   console.log(e);
   const currentTime = e.target.currentTime;
   const duration = e.target.duration;
   let progressWidth = (currentTime / duration) * 100;
   progressBar.style.width = `${progressWidth}%`;

   let musicCurrentTime = wrapper.querySelector(".current");
   let musicDuration = wrapper.querySelector(".duration");
   mainAudio.addEventListener("loadeddata", () => {
       //update song total duration
       let audioDuration = mainAudio.duration;
       let totalMin = Math.floor(audioDuration / 60);
       let totalSec = Math.floor(audioDuration % 60);
       if(totalSec < 10){
           totalSec = `0${totalSec}`
       }
       musicDuration.innerHTML = `${totalMin}:${totalSec}`;

   });
   //update playing song current time
   let currentMin = Math.floor(currentTime / 60);
   let currentSec = Math.floor(currentTime % 60);
   if(currentSec < 10){
       currentSec = `0${currentSec}`
   }
   musicCurrentTime.innerHTML = `${currentMin}:${currentSec}`;

})

//Let's update playing song current time according to the progress bar with
progressArea.addEventListener("click", (e) => {
    let progressWidthhval = progressArea.clientWidth; // get width of progress bar
    let clickedOffSetX = e.offsetX; //getting offset X value
    let songDuration = mainAudio.duration; // getting song total duration

    mainAudio.currentTime = (clickedOffSetX / progressWidthhval) * songDuration;
    playMusic();
})

// let's work on repeat, shuffle song according to the icon

const repeatBtn = wrapper.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", (e) => {
    // first we get the innerText of the icon then we'll change accordingly
    let getText = repeatBtn.innerHTML; // get the inner text of the icon
    // let's do different changes on different icon click using swich case
    switch(getText){
        case "repeat": // if this icon is repeat then change it to repeat one
            repeatBtn.innerHTML = "repeat_one";
            repeatBtn.setAttribute("title", "Song looped");
            break;
        case "repeat_one": // if this icon is repeat_one the change it to shuffle
            repeatBtn.innerHTML = "shuffle";
            repeatBtn.setAttribute("title", "Playback shuffle");
            break;
        case "shuffle": // if this icon is shuffle the change it to repeat
            repeatBtn.innerHTML = "repeat";
            repeatBtn.setAttribute("title", "Play list looped");
            break;    
    }
})

// let's work on what to do after the song ends
mainAudio.addEventListener("ended", () =>{
    let getText = repeatBtn.innerHTML; // get the inner text of the icon
    switch(getText){
        case "repeat": // if this icon is repeat then change it to repeat one
            nextMusic();
            break;
        case "repeat_one": // if this icon is repeat_one the change it to shuffle
            mainAudio.currentTime = 0;
            loadMusic(musicIndex);
            playMusic();
            break;
        case "shuffle": // if this icon is shuffle the change it to repeat
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            do{
                randIndex = Math.floor((Math.random() * allMusic.length) + 1); 
            }while(musicIndex == randIndex);
            musicIndex = randIndex;
            loadMusic(musicIndex);
            playMusic();
            playingNow();
            playingNow1();
            break;    
    }

});

showMoreBtn.addEventListener("click", ()=>{
    musicList.classList.toggle("show");
});
hideMusicBtn.addEventListener("click", ()=>{
    showMoreBtn.click();
});

const ulTag = wrapper.querySelector(".music-list ul");
const ulTag1 = advicesWrapper.querySelector(".advices-list ul");

// let's create li according to the array length
for (let i = 0; i < allMusic.length; i++){
    // let's pass the song name, artist from the array to li
    let liTag = `<li li-index="${i+1}" class = "advice" month = "${allMusic[i].month}" year = "${allMusic[i].year}" zone = "${allMusic[i].zone}" data-name = "${allMusic[i].type}">
                    <div class="row">
                        <span>${allMusic[i].name}</span>
                        <p>${allMusic[i].month} ${allMusic[i].year} </p>
                    </div>
                    <audio class="${allMusic[i].src}" src="cmd/static/songs/${allMusic[i].src}.mp3"></audio> 
                    <span id="${allMusic[i].src}" class="audio-duration"></span>
                </li>`
                
    ulTag.insertAdjacentHTML("beforeend", liTag);
    ulTag1.insertAdjacentHTML("beforeend", liTag);
    
    let liAudioDuration = ulTag.querySelector(`#${allMusic[i].src}`);
    let liAudioDuration1 = ulTag1.querySelector(`#${allMusic[i].src}`);
    let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);
    let liAudioTag1 = ulTag1.querySelector(`.${allMusic[i].src}`);

    liAudioTag.addEventListener("loadeddata", ()=>{
       let audioDuration = liAudioTag.duration;
       let totalMin = Math.floor(audioDuration / 60);
       let totalSec = Math.floor(audioDuration % 60);
       if(totalSec < 10){
           totalSec = `0${totalSec}`
       }
       liAudioDuration.innerHTML = `${totalMin}:${totalSec}`;
       //adding t-duration attribute which we will use below
       liAudioDuration.setAttribute("t-duration",`${totalMin}:${totalSec}`);
    });
    liAudioTag1.addEventListener("loadeddata", ()=>{
        let audioDuration = liAudioTag1.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10){
            totalSec = `0${totalSec}`
        }
        liAudioDuration1.innerHTML = `${totalMin}:${totalSec}`;
        //adding t-duration attribute which we will use below
        liAudioDuration1.setAttribute("t-duration",`${totalMin}:${totalSec}`);
     });
}


//let's add onclick attribute in all li
const allLitags = ulTag.querySelectorAll("li");
const allLitags1 = ulTag1.querySelectorAll("li");
function playingNow() {
    for (let j = 0; j < allLitags.length; j++) {
        let audioTag = allLitags[j].querySelector(".audio-duration");
        //let's remove playing class from from all other li expect the last one which is clicked
        if(allLitags[j].classList.contains("playing")){
            allLitags[j].classList.remove("playing");
            // let's get that audio duration value and pass to .audio-durationinnerText
            let adDuration = audioTag.getAttribute("t-duration");
            console.log(adDuration);
            
            audioTag.innerText = adDuration;
        }
        // if there is an li tag which li-index is equal to music index
        //then this music is playing now
        if(allLitags[j].getAttribute("li-index") == musicIndex){
            allLitags[j].classList.add("playing");
            audioTag.innerHTML = "playing";  
        }
        // adding onclick attribute in all li tags
        allLitags[j].setAttribute("onclick", "clicked(this)")
        
    }
    
}
function playingNow1() {
    for (let j = 0; j < allLitags1.length; j++) {
        let audioTag = allLitags1[j].querySelector(".audio-duration");
        //let's remove playing class from from all other li expect the last one which is clicked
        if(allLitags1[j].classList.contains("playing")){
            allLitags1[j].classList.remove("playing");
            // let's get that audio duration value and pass to .audio-durationinnerText
            let adDuration = audioTag.getAttribute("t-duration");
            audioTag.innerText = adDuration;
        }
        // if there is an li tag which li-index is equal to music index
        //then this music is playing now
        if(allLitags1[j].getAttribute("li-index") == musicIndex){
            allLitags1[j].classList.add("playing");
            audioTag.innerHTML = "playing";  
        }
        // adding onclick attribute in all li tags
        allLitags1[j].setAttribute("onclick", "clicked(this)")
        
    }
    
}
//let's play song on click
function clicked(element) {
    //getting li-index of a particular clicked li tag
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex;
    console.log(musicIndex);
    loadMusic(musicIndex);
    playMusic();
    playingNow();
    playingNow1();
}

