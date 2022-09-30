import React from 'react';
import MainLayout from "../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";
import {useActions} from "../../hooks/useActions";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [

        {
            "_id": "63356306086862a097582c2d",
            "name": "TRACK 1",
            "artist": "123",
            "text": "12345",
            "listens": 0,
            "picture": "image/48478a28-b569-4b25-95aa-20630e8d3abc.jpg",
            "audio": "audio/05020494-47c6-40b9-ae86-879493893df4.mp3",
            "comments": [],
        },
        {
            "_id": "6335630d086862a097582c2f",
            "name": "TRACK 2",
            "artist": "123",
            "text": "12345",
            "listens": 0,
            "picture": "image/bdf49d65-7812-48ec-ae35-97cd20a93481.jpg",
            "audio": "audio/65e2c4a7-f522-4854-9b46-b657bb508f8e.mp3",
            "comments": [],
        },
        {
            "_id": "63356311086862a097582c31",
            "name": "TRACK 3",
            "artist": "123",
            "text": "12345",
            "listens": 0,
            "picture": "image/9bf03c08-e9dc-47a2-9a0d-d69700210843.jpg",
            "audio": "audio/04206d14-b3de-4802-b60f-1a26b15aa0ed.mp3",
            "comments": [],
        },
        {
            "_id": "63356315086862a097582c33",
            "name": "TRACK 4",
            "artist": "123",
            "text": "12345",
            "listens": 0,
            "picture": "image/e8b5b1c3-3a6f-48eb-817d-6e5bdc49a73e.jpg",
            "audio": "audio/d7f94e01-e537-4073-9d30-3c88d87b77a3.mp3",
            "comments": [],
        }

    ]
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}></TrackList>
                </Card>
            </Grid>
        </MainLayout>

    );
};

export default Index;