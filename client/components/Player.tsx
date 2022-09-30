import React, {ChangeEvent, useEffect} from 'react';
import {Grid, IconButton} from "@mui/material";
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import styles from '../styles/Player.module.scss'
import {ITrack} from "../types/track";
import TrackProgress from './TrackProgress';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {staticPath} from "./TrackItem";

let audio;

const Player = () => {
    const track: ITrack = {
        "_id": "63356315086862a097582c33",
        "name": "TRACK 4",
        "artist": "123",
        "text": "12345",
        "listens": 0,
        "picture": "image/e8b5b1c3-3a6f-48eb-817d-6e5bdc49a73e.jpg",
        "audio": "audio/d7f94e01-e537-4073-9d30-3c88d87b77a3.mp3",
        "comments": [],
    }

    const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()
        }
    }, [active])

    const setAudio = () => {

        if ( active) {
            audio.src = staticPath + active.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration) )
                audio.play()
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    useEffect(() => {
        currentTime === duration &&  pauseTrack()
    }, [currentTime])

    function play()  {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))

    }
    
    const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))

    }

    if (!active) return null

    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {pause ? <PlayArrow/> : <Pause/>}
            </IconButton>
            <Grid style={{width: 200, margin: '0 20px'}}>
                <div>{active?.name}</div>
                <div style={{fontSize: 12, color: 'grey'}}>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
            <VolumeUp style={{marginLeft: 'auto'}}></VolumeUp>
            <TrackProgress left={volume} right={100} onChange={changeVolume}/>

        </div>
    );
};

export default Player;