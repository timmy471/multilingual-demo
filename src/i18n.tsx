import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, //To enable us see errors
    //   lng: "en", //Default language as english
    resources: {
      en: {
        translation: {
          greeting: "Welcome to Language Playground",
          detail:
            "Did you know that over 7,000 languages are spoken worldwide? I am a  Playground demonstrates how web applications can support users in multiple languages, making them accessible and inclusive to people  from different backgrounds",
        },
      },
      fr: {
        translation: {
          greeting: "Bienvenue sur le terrain de jeu linguistique",
          detail:
            "Saviez-vous que plus de 7 000 langues sont parlées dans le monde ? Ce terrain de jeu démontre comment les applications web peuvent prendre en charge les utilisateurs dans plusieurs langues, les rendant accessibles et inclusives aux personnes de différents horizons.",
        },
      },
      de: {
        translation: {
          greeting: "Willkommen im Sprachspielplatz",
          detail:
            "Wussten Sie, dass weltweit über 7.000 Sprachen gesprochen werden? Dieser Spielplatz zeigt, wie Webanwendungen Benutzer in mehreren Sprachen unterstützen können, wodurch sie für Menschen aus verschiedenen Hintergründen zugänglich und inklusiv werden.",
        },
      },
      es: {
        translation: {
          greeting: "Bienvenido al patio de juegos de idiomas",
          detail:
            "¿Sabías que se hablan más de 7,000 idiomas en todo el mundo? Este patio de juegos demuestra cómo las aplicaciones web pueden admitir usuarios en varios idiomas, haciéndolas accesibles e inclusivas para personas de diferentes orígenes.",
        },
      },
      yo: {
        translation: {
          greeting: "Kaabo si ibi idaraya ede",
          detail:
            "Ṣe o mọ̀ pé àwọn èdè tó ju 7,000 lọ wà ní ayé? Ibi idaraya yii ń fi hàn bí àwọn ohun elo ayelujara ṣe lè ṣe atilẹyin fun àwọn oníṣe ní àwọn èdè lọ́pọ̀, kí ó lè jẹ́ kí wọ́n lè wọ́lé àti kí ó yẹ fún àwọn ènìyàn láti àyíká tó yatọ̀.",
        },
      },
    },
  });
