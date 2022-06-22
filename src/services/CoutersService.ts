import { AxiosResponse } from "axios";
import api from "../http";
import { RsponseCounterItem} from "../types/counters";

export class CoutersService {
  /**
   *Получение всех приборов учета
   *
   * @returns массив с данными приборов учета
   */
  static async getCounters() {
    console.log("|CoutersService|getCounters|");
    return null;
  }


  /**
   *Получить данные по указанному прибору учета
   * @param id - ID прибора учета
   * @returns  данные по выбранному прибору учета
   */
  static async getCountersItem(id: number) {
    console.log("|CoutersService|getCountersItem|");
    return null;
  }
}
