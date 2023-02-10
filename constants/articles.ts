import auto_blog from "../public/articlesImg/kasco-330x140.jpg"
import shiny from "../public/articlesImg/shiny-330x140.jpg"
import remont from "../public/articlesImg/remont-330x138.jpg"
import pokupka from "../public/articlesImg/pokypka-by-330x140.jpg"
import pokras from "../public/articlesImg/pokras-330x140.jpg"
import sdacha_na_AT from "../public/voditelskie-prava-na-avtomaticheskuyu-korobku-peredach.jpg"
import sierra from "../public/800px-sierra_3_door_-_an_early_one.jpg"
import bnw_mers from "../public/bmw-mers.jpg"
import {StaticImageData} from "next/image";

export type ArticlesType = {
    id: number,
    title: string,
    coverImage: StaticImageData,
    chapter: "Cтатьи" | "Ремонт" | "Автоновости" | "Ретро",
    shotDescriptionLength: number,
    shortDescriptionArticle: string,
    addedDate: string,
}

export const ARTICLES: ArticlesType[] = [
    {
        id: 1,
        title: "Угон автомобиля и КАСКО — на какие выплаты можно претендовать?",
        coverImage: auto_blog,
        chapter: "Cтатьи",
        shortDescriptionArticle: `В случае угона транспортного средства и при наличии страховки КАСКО, 
        автолюбитель может рассчитывать на компенсацию. Однако величина выплаты может варьироваться в широких пределах. 
        Есть несколько факторов, которые будет принимать в расчет страховщик.`,
        shotDescriptionLength: 103,
        addedDate: `02.12.2022`
    },
    {
        id: 2,
        title: "Как выбрать шины для автомобиля",
        coverImage: shiny,
        chapter: "Cтатьи",
        shortDescriptionArticle: `Если автовладельцу нужны шины ему приходиться определяться с их выбором, 
        а это далеко непросто, ведь на рынке представлен огромный ассортимент разных ценовых категорий. 
        И так перед вами делема как выбрать шины?`,
        shotDescriptionLength: 95,
        addedDate: `30.11.2022`
    },
    {
        id: 3,
        title: "Основные этапы капитального ремонта двигателя",
        coverImage: remont,
        chapter: "Ремонт",
        shortDescriptionArticle: `Автовладельцы по мере изнашивания транспорта довольно часто сталкиваются с 
        различными проблемами. Это могут быть простые проблемы, как замена масла или сложные, 
        как кузовной ремонт легковых автомобилей. `,
        shotDescriptionLength: 85,
        addedDate: `26.06.2022`
    },
    {
        id: 4,
        title: "Покупка подержанного автомобиля: к чему готовится?",
        coverImage: pokupka,
        chapter: "Cтатьи",
        shortDescriptionArticle: `Приобретение автомобиля, который уже был в использовании, 
        может потребовать основательного вложения средств. Самыми затратными и такими, что не терпят ожидания, 
        станут два пункта — это двигатель и кузов. Еще при покупке стоит смотреть на состояние данных двух составляющих, 
        которые в будущем могут (теоретически) потребовать на ремонт или уход практически половину 
        стоимости самого автомобиля. `,
        shotDescriptionLength: 110,
        addedDate: `18.08.2022`
    },
    {
        id: 5,
        title: "Покраска пластиковых деталей автомобиля",
        coverImage: pokras,
        chapter: "Ремонт",
        shortDescriptionArticle: `Современные автомобили достаточно прихотливы в обслуживании. Это проявляется 
        во многих нюансах, и кузовной ремонт машин — не исключение. Многие детали сегодня выполнены не иначе, 
        как из пластмассы. При покраске это может создать некоторые сложности. Ведь многие виды красок негативно влияют 
        на такие детали. Чтоб подобрать нужную краску, необходимо определить тип пластмассы, иначе ничего не получится.`,
        shotDescriptionLength: 150,
        addedDate: `11.07.2022`
    },
    {
        id: 6,
        title: "Сдача на водительские права с автоматической коробкой передач",
        coverImage: sdacha_na_AT,
        chapter: "Автоновости",
        shortDescriptionArticle: `Камнем преткновения для многих курсантов при езде по городу является 
        механическая коробка передач. Ловля сцепления на начальных этапах обучения превращается в настоящую проблему, 
        поэтому многие курсанты предпочти ли сдачу экзамена в ГАИ на автоматической коробке передач.`,
        shotDescriptionLength: 150,
        addedDate: `08.11.2022`
    },
    {
        id: 7,
        title: "Гісторыя Ford Sierra",
        coverImage: sierra,
        chapter: "Ретро",
        shortDescriptionArticle: `Калі ў апошні раз вы праводзілі поглядам Ford Sierra? 
        Напэўна, гадоў 15 таму. Сёння ўслед такім ужо не глядзяць, хіба толькі дзівяцца «як, ён усё яшчэ на хаду?». 
        Але гэты «рабацяга» па-ранейшаму ў страі і выдатна спраўляецца са сваімі абавязкамі.`,
        shotDescriptionLength: 150,
        addedDate: `14.10.2022`
    },
    {
        id: 8,
        title: "Наиболее частые проблемы с автомобилями BMW или Mercedes и что с этим делать",
        coverImage: bnw_mers,
        chapter: "Ремонт",
        shortDescriptionArticle: `Бюджетные отечественные и легковые автомобили можно легко починить в любом сервисе. 
        Однако, если случилась поломка автомобиля, который принадлежит к премиум или к представительскому классу, 
        к примеру Мерседес или БМВ, то следует доверить восстановление лишь профессиональным специалистам.`,
        shotDescriptionLength: 150,
        addedDate: `28.12.2022`
    },

]

