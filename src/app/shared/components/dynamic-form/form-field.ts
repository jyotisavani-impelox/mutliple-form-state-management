type ControlType = 'textbox' | 'dropdown' | 'checkbox' | 'radio' | 'textarea';

export class FormField<T> {
  value: T | string;
  key: string;
  label: string;
  required: boolean;
  validator: string;
  order: number;
  controlType: ControlType;
  type: string;
  options: { key: string; value: string }[];
  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      validator?: string;
      order?: number;
      controlType?: ControlType;
      type?: string;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value || '';
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.validator = options.validator || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || ('text' as ControlType);
    this.type = options.type || '';
    this.options = options.options || [];
  }
}
