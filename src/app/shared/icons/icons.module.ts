import {NgModule} from "@angular/core";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faAddressCard,
  faBell,
  faCalendar,
  faCalendarCheck,
  faCalendarMinus,
  faCalendarPlus,
  faCopy,
  faEye,
  faEyeSlash,
  faHandPointRight,
  faPenToSquare,
  faTrashCan,
  faUser,
  faA,
  faCar,
  faCloud,
  faFilm,
  faGear,
  faMarker,
  faMinus,
  faPen,
  faPhone,
  faPlus,
  faPrint,
  faTrash,
  faUserPen,
  faUserPlus,
  faUsers,
  faXmark,
  faStar,
  faDollarSign,
  faClockRotateLeft,
  faList,
  faCheck,
  faFileArrowDown,
  faFolder,
  faCloudSun,
  faPaperclip,
  faBook,
  faKitchenSet,
  faGamepad,
  faPaw,
  faArrowRight,
  faStarHalf,
  faKeyboard, faCode, faTerminal, faLaptopCode, faShieldHeart, faShieldDog
} from "@fortawesome/free-solid-svg-icons";


@NgModule({
    imports: [
        FontAwesomeModule
    ],
    exports: [
        FontAwesomeModule
    ]

})
export class IconsModule {
    constructor(library: FaIconLibrary){
        library.addIcons(
            faFilm,
            faCloud,
            faPhone,
            faPaw,
            faArrowRight,
            faUser,
            faGamepad,
            faStar,
            faStarHalf,

            faBook,
            faCloudSun,
            faCalendar,
            faList,
            faCheck,
            faPaperclip,
            faGear,
            faXmark,
            faStar,
            faDollarSign,
            faClockRotateLeft,
            faCar,
            faTrash,
            faPlus,
            faPen,
            faPenToSquare,
            faPrint,
            faMinus,
            faEyeSlash,
            faUsers,
            faCopy,
            faAddressCard,
            faMarker,
            faEye,
            faFolder,
            faUserPlus,
            faUserPen,
            faA,
            faTrashCan,
            faKitchenSet,
            faLaptopCode,
            faShieldDog,
            faShieldHeart,
            faHandPointRight,
            faCalendarPlus,
            faKeyboard,
            faCode,
            faTerminal,
            faCalendarMinus,
            faCalendarCheck,
            faFileArrowDown,
            faBell
        );
    }
}
