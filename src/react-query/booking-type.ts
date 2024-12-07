// Type for the booked_services object
interface InstantServiceObj {
  mesonDayCount: number;
  helperDayCount: number;
  mesonRate: number;
  helperRate: number;
  mesonOvertimeCount: number;
  helperOvertimeCount: number;
  mesonOvertimeRate: number;
  helperOvertimeRate: number;
  totalMesonDayRate: number;
  totalHelperDayRate: number;
  totalMesonOvertimeRate: number;
  totalHelperOvertimeRate: number;
  totalDayPrice: number;
  tipValue: number;
}

interface BookedService {
  id: number;
  user_id: number;
  service_id: number;
  instant_service_id: number;
  address: string;
  city_id: number;
  state_id: number;
  pincode: number;
  meta_title: string | null;
  meta_keyword: string | null;
  meta_description: string | null;
  mode: "day" | "hour"; // Assuming only these modes are allowed
  book_date: string; // ISO date format
  time_slot: string; // Time in HH:mm format
  pick_and_drop: number; // 0 or 1
  tip: number;
  total_amount: number;
  coupon_code: string | null;
  coupon_discounted: number;
  instant_service_obj: string; // JSON string containing InstantServiceObj
  status: number;
  deleted_at: string | null;
  created_at: string; // ISO date format
  updated_at: string; // ISO date format
}

// Type for the entire API response
interface BookedServicesResponse {
  success: boolean;
  booked_services: BookedService[];
}
