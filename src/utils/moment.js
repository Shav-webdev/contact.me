import momentTZ from "moment-timezone";
import moment from "moment";
import "moment/locale/hy-am";
import "moment/locale/en-au";
import { momentConstants } from "./constants";
momentTZ.tz.setDefault(momentConstants.TIME_ZONE);

export const changeMomentLocale = lang => {
    moment.locale(lang);
};

export default momentTZ;
