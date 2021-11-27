import { CompanyGoalType } from '../../enums/CompanyGoalType';

import highQualityLogo from '../../../../assets/icons/highQualityIcon.svg';
import freeShippingIcon from '../../../../assets/icons/freeShippingIcon.svg';
import warrantyProtectionIcon from '../../../../assets/icons/warrantyProtectionIcon.svg';

export const getIcon = (type: CompanyGoalType): string => {
  switch (type) {
    case CompanyGoalType.HighQuality:
      return highQualityLogo;
    case CompanyGoalType.FreeShipping:
      return freeShippingIcon;
    case CompanyGoalType.WarrantyProtection:
    default:
      return warrantyProtectionIcon;
  }
};
