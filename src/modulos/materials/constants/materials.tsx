import { TableColumnsType } from 'antd';
import { Material } from '../../../interface/materials/TableMaterials';

export const columnsMaterials: TableColumnsType<Material> = [
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: true,
    key: '',
  },
  {
    title: 'Ref Abbi',
    dataIndex: 'internal_code',
  },
  {
    title: 'Cod. Sistema Contable',
    dataIndex: 'accounting_system_code',
  },
  {
    title: 'Descripción',
    dataIndex: 'description',
  },
  {
    title: 'Und. Compra',
    dataIndex: 'unit_measurement',
  },
  {
    title: 'Und. Causación',
    dataIndex: 'unit_measurement_causation',
  },
  {
    title: 'Costo Promedio',
    dataIndex: 'unit_average_price',
    sorter: (a, b) => a.unit_average_price - b.unit_average_price,
    render: (costo) => <p>$ {costo}</p>,
  },

  {
    title: 'Requiere Serial',
    dataIndex: 'required_serial',
    sorter: (a, b) => a.required_serial.length - b.required_serial.length,
  },
  {
    title: 'Categoria',
    dataIndex: 'category_name',
  },
  {
    title: 'Creado En',
    dataIndex: 'created_at',
  },
  {
    title: 'Actualizado En',
    dataIndex: 'updated_at',
  },
];
