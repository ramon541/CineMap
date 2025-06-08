import { memo } from 'react';
import { LegendList } from '@legendapp/list';
import SliderItem from '../SliderItem';

const mockData = [
    {
        id: 1,
        backdrop_path: '/l33oR0mnvf20avWyIMxW02EtQxn.jpg',
        title: 'Interestelar',
        overview:
            'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de',
    },
    {
        id: 12,
        backdrop_path: '/8C32MMrMYT5gON7nXgEGeM4puH4.jpg',
        title: 'The Science of Interstellar',
        overview:
            "Matthew McConaughey narrates a fascinating look at Christopher Nolan's sci-fi film, 'Interstellar',",
    },
    {
        id: 123,
        backdrop_path: '/fTcs5ejlN1MwwLSSv9aU1mi5alL.jpg',
        title: "Interstellar: Nolan's Odyssey",
        overview: "A look behind the lens of Christopher Nolan's space epic.",
    },
    {
        id: 1234,
        backdrop_path: '/p1XtUnWJrmVNqyhYJGIatMNt8C1.jpg',
        title: 'Interstella 5555',
        overview:
            'Quatro músicos de outra galáxia, que formam o grupo "Crescendolls", são raptados por um agente',
    },
    {
        id: 12345,
        backdrop_path: '/lQS9il7YqGjmmBefZY27uG5wbzT.jpg',
        title: 'Faster Than Light: the Dream of Interstellar Flight',
        overview:
            '“Faster Than Light” explores the longstanding quest to develop spacecraft with enough power and',
    },
];

function Slider() {
    return (
        <LegendList
            data={mockData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
                <SliderItem
                    item={{
                        id: item.id,
                        backdrop_path: item.backdrop_path,
                        title: item.title,
                        overview: item.overview,
                    }}
                    index={index}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />
    );
}

export default memo(Slider);
