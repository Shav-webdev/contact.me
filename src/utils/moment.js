import moment from "moment-timezone";
import { momentConstants } from "./constants";
moment.tz.setDefault(momentConstants.TIME_ZONE);

export default moment;
