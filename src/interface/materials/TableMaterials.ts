export interface IMaterials {
  materials: Material[];
  records_count: number;
  limit: number;
  next_page: number;
  previous_page: null;
}

export interface Material {
  id: number;
  internal_code: number;
  accounting_system_code: number;
  description: string;
  unit_measurement: UnitMeasurement;
  unit_measurement_causation: UnitMeasurement;
  unit_average_price: number;
  required_serial: string;
  category_id: number;
  category_name: CategoryName;
  created_at: Date;
  updated_at: Date;
}

export enum CategoryName {
  MaterialesDeMediciónYRegulación = 'Materiales de Medición y regulación',
  TuberiasAccesoriosYFerreteria = 'Tuberias, accesorios y ferreteria',
}

export enum UnitMeasurement {
  Mts = 'MTS',
  Und = 'UND',
}
