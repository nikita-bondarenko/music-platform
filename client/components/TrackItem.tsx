import React, {FC} from 'react';
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@mui/material";
import styles from '../styles/TrackItem.module.scss'
import {Pause, PlayArrow, Delete} from "@mui/icons-material";
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface TrackItemProps {
    track: ITrack,
    active?: boolean
}

export const staticPath = 'http://localhost:5000/'

const TrackItem: FC<TrackItemProps> = ({track}) => {
    const router = useRouter()
    const {active, pause} = useTypedSelector(state => state.player)
    const {playTrack, pauseTrack, setActiveTrack} = useActions()

    const play = (e) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()
    }

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={play}>
                {active !== track || pause ? <PlayArrow/> : <Pause/>}
            </IconButton>
            <img width={70} height={70} src={staticPath + track.picture} alt=""/>
            <Grid style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'grey'}}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:60</div>}
            <IconButton onClick={e => e.stopPropagation()} style={{marginLeft: 'auto'}}>
                <Delete></Delete>
            </IconButton>
        </Card>
    )
};

export default TrackItem;