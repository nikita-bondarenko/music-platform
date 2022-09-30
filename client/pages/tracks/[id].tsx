import React from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {staticPath} from "../../components/TrackItem";

const TrackPage = () => {
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
    const router = useRouter()
    return (
        <MainLayout>
            <Button variant={"outlined"} style={{fontSize: 23}} onClick={() => router.push('/tracks')}>К списку</Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={staticPath + track.picture} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <h1>{track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField
                    label="Ваше имя"
                    fullWidth
                />
                <TextField
                    label="Комментарий"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                <div>
                    <div>Автор - {comment.username}</div>
                    <div>Комментарий - {comment.text}</div>
                </div>)}
            </div>
        </MainLayout>
    );
};

export default TrackPage;