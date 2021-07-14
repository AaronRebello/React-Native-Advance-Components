
import Intl from 'intl';
import 'intl/locale-data/jsonp/en';

export const numberFormat = (
  value = "",
  locale = "tr-TR",
  options = {},
) => new Intl.NumberFormat(locale, options).format(value);
