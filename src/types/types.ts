export interface Transaction {
  id: number;
  datetime: string;
  description: string;
  price: number;
}

export interface SheduleTimer {
  from: string;
  to: string;
}

export interface Schedule {
  day: "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс";
  timer: SheduleTimer;
}
