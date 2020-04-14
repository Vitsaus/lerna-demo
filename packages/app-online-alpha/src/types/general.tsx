import {FeatureMessageState} from '@opr-finance/feature-messages';
import {FeatureLoginState} from "@opr-finance/feature-login";

export type AppState = FeatureMessageState & FeatureLoginState;
