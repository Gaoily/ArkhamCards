import React from 'react';
import { find } from 'lodash';
import { ngettext, msgid, t } from 'ttag';

import CampaignGuideTextComponent from '../../CampaignGuideTextComponent';
import SetupStepWrapper from '../../SetupStepWrapper';
import BinaryPrompt from '../../prompts/BinaryPrompt';
import Card from 'data/Card';
import {
  BranchStep,
  ScenarioDataCondition,
} from 'data/scenario/types';
import GuidedCampaignLog from 'data/scenario/GuidedCampaignLog';

interface Props {
  step: BranchStep;
  condition: ScenarioDataCondition;
  campaignLog: GuidedCampaignLog;
}

export default class ScenarioDataConditionComponent extends React.Component<Props> {
  _renderInvestigatorCard = (card: Card) => {
    const { step, condition } = this.props;
    return (
      <BinaryPrompt
        id={step.id}
        bulletType={step.bullet_type}
        text={t`If ${card.name} was chosen as an investigator for this campaign`}
        trueResult={find(condition.options, option => option.condition === card.code)}
      />
    );
  };

  render(): React.ReactNode {
    const { step, condition, campaignLog } = this.props;
    switch (condition.scenario_data) {
      case 'player_count': {
        const playerCount = campaignLog.playerCount();
        return (
          <SetupStepWrapper bulletType={step.bullet_type}>
            <CampaignGuideTextComponent
              text={step.text ||
                ngettext(msgid`Because there is ${playerCount} player in the game:`,
                  `Because there are ${playerCount} players in the game:`,
                  playerCount)
              }
            />
          </SetupStepWrapper>
        );
      }
      case 'investigator_status':
      case 'resolution': {
        // Only used for control flow right now.
        return null;
      }
    }
  }
}