# nestjs-paystack

The wrapper provides a convenient way to integrate Paystack payment functionality into your NestJS applications.

## Installation

```shell
npm install @devtools-bp/nestjs-paystack
```

or

```shell
yarn add @devtools-bp/nestjs-paystack
```

## Configuration

To use the nestjs-paystack, you need to provide your Paystack API key. You can obtain the API key from the Paystack
dashboard. Once you have the API key, you can configure the wrapper in your NestJS application.

#### In App Module

```typescript
import { Module } from '@nestjs/common';

import { NsPaystackModule } from '@devtools-bp/nestjs-paystack';

@Module({
  imports: [
    NsPaystackModule.register({
      secretKey: 'PAYSTACK_SECRET_KEY'
    })
  ]
})
export class AppModule {}
```

### Or use async registration to access environment variables

#### In App Module

```typescript
import { Module } from '@nestjs/common';

import { NsPaystackModule } from '@devtools-bp/nestjs-paystack';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    NsPaystackModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secretKey: configService.get('PAYSTACK_SECRET_KEY')
      }),
      inject: [ConfigService]
    })
  ]
})
export class AppModule {}
```

### Usage

#### In Service

```typescript
import { Injectable } from '@nestjs/common';
import {
  PsTransactionsService,
  PsInitializeTransactionRequestModel,
  PsInitializeTransactionResponseModel
} from '@devtools-bp/nestjs-paystack';

@Injectable()
export class TransactionsService {
  constructor(private readonly psTransactionsService: PsTransactionsService) {}

  initializeTransaction(
    payload: PsInitializeTransactionRequestModel
  ): Promise<PsInitializeTransactionResponseModel> {
    return this.psTransactionsService.initializeTransaction(payload);
  }
}
```

#### In Controller

```typescript
import { Body, Controller, Post } from '@nestjs/common';
import {
  PsInitializeTransactionRequestModel,
  PsInitializeTransactionResponseModel
} from '@devtools-bp/nestjs-paystack';
import { TransactionsService } from '../services/transactions.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('initialize')
  initialize(
    @Body() payload: PsInitializeTransactionRequestModel
  ): Promise<PsInitializeTransactionResponseModel> {
    return this.transactionsService.initializeTransaction(payload);
  }
}
```

### API ENDPOINTS

- [x] **Transactions** <span style="color:green;">&#x2714;</span>
  - [x] Initialize Transaction <span style="color:green;">&#x2714;</span>
  - [x] Verify Transaction <span style="color:green;">&#x2714;</span>
  - [x] List Transaction <span style="color:green;">&#x2714;</span>
  - [x] Fetch Transaction <span style="color:green;">&#x2714;</span>
  - [x] Charge Transaction <span style="color:green;">&#x2714;</span>
  - [x] View Transaction Timeline <span style="color:green;">&#x2714;</span>
  - [x] Transaction Totals <span style="color:green;">&#x2714;</span>
  - [x] Export Transaction <span style="color:green;">&#x2714;</span>
  - [x] Partial Debit <span style="color:green;">&#x2714;</span>
- [x] **Transaction Splits** <span style="color:green;">&#x2714;</span>
  - [x] Create Split <span style="color:green;">&#x2714;</span>
  - [x] List Split <span style="color:green;">&#x2714;</span>
  - [x] Fetch Split <span style="color:green;">&#x2714;</span>
  - [x] Update Split <span style="color:green;">&#x2714;</span>
  - [x] Add/Update Subaccount Split <span style="color:green;">&#x2714;</span>
  - [x] Remove Subaccount from Split <span style="color:green;">&#x2714;</span>
- [ ] **Terminal**
- [ ] **Customers**
- [ ] **Dedicated Virtual Accounts**
- [ ] **Apple Pay**
- [ ] **Subaccounts**
- [ ] **Plans**
- [ ] **Subscriptions**
- [ ] **Products**
- [ ] **Payment Pages**
- [ ] **Payment Requests**
- [ ] **Settlements**
- [ ] **Transaction Recipients**
- [ ] **Transfers** &#x23F3;
  - [ ] **Initiate Transfer** &#x23F3;
  - [ ] **Finalize Transfer** &#x23F3;
  - [ ] **Initiate Bulk Transfer** &#x23F3;
  - [ ] **List Transfer** &#x23F3;
  - [ ] **Fetch Transfer** &#x23F3;
  - [ ] **Verify Transfer** &#x23F3;
- [ ] **Transfers Control**
- [ ] **Bulk Charges**
- [ ] **Integration**
- [ ] **Charge**
- [ ] **Disputes**
- [ ] **Refunds**
- [x] **Verification** <span style="color:green;">&#x2714;</span>
  - [x] Resolve Account Number <span style="color:green;">&#x2714;</span>
  - [x] Validate Account <span style="color:green;">&#x2714;</span>
  - [x] Resolve Card BIN <span style="color:green;">&#x2714;</span>
- [x] **Miscellaneous** <span style="color:green;">&#x2714;</span>
  - [x] **List Banks** <span style="color:green;">&#x2714;</span>
  - [x] **List Countries** <span style="color:green;">&#x2714;</span>
  - [x] **List States (AVS)** <span style="color:green;">&#x2714;</span>

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a
pull request on the GitHub
repository. [Learn how to contribute to the project.](https://github.com/firstcontributions/first-contributions)

## License

The devtools-bp monorepo is released under
the [MIT License](https://github.com/brianpooe/devtools-bp/blob/main/LICENSE). Please make sure you understand its
terms and conditions when using the libraries and tools provided in this repository.

## Authors

- [Brian Pooe](https://github.com/brianpooe)
