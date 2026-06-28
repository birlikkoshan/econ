export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export type ServiceItem = {
  id: string;
  titleKey: string;
  descriptionKey: string;
};
