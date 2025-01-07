import { MyBig } from '../big';

export function toCents(amount: number) {
  return new MyBig(amount).times(100).round(2).toNumber();
}

export function fromCents(amount: number) {
  return new MyBig(amount).div(100).round(2).toNumber();
}

export function toCurrencyFormatFromCents(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(fromCents(amount));
}
