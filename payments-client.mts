export interface PaymentsClientConfig {
  readonly endpoint: string;
}

export class PaymentsClient {
  constructor(config: PaymentsClientConfig) {
    console.log(config);
  }
}
