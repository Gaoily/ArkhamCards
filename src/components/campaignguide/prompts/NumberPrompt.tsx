import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { find } from 'lodash';

import EffectsComponent from '../EffectsComponent';
import SetupStepWrapper from '../SetupStepWrapper';
import ScenarioGuideContext, { ScenarioGuideContextType } from '../ScenarioGuideContext';
import StepsComponent from '../StepsComponent';
import CardTextComponent from 'components/card/CardTextComponent';
import PlusMinusButtons from 'components/core/PlusMinusButtons';
import { BulletType, Effect, Option } from 'data/scenario/types';
import ScenarioStateHelper from 'data/scenario/ScenarioStateHelper';
import typography from 'styles/typography';

interface Props {
  id: string;
  bulletType?: BulletType;
  prompt: string;
  min?: number;
  max?: number;
  options?: Option[];
  effects?: Effect[];
  text?: string;
}

interface State {
  value: number;
}

export default class NumberPrompt extends React.Component<Props, State> {
  static contextType = ScenarioGuideContext;
  context!: ScenarioGuideContextType;

  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.min || 0,
    };
  }

  _inc = () => {
    this.setState(state => {
      const newValue = state.value + 1;
      return {
        value: this.props.max ? Math.min(newValue, this.props.max) : newValue,
      };
    });
  };

  _dec = () => {
    this.setState(state => {
      return {
        value: Math.max(state.value - 1, this.props.min || 0),
      };
    });
  };

  _submit = () => {
    const {
      id,
    } = this.props;
    this.context.scenarioState.setCount(id, this.state.value);
  };

  renderCount(count: number) {
    return (
      <View style={styles.count}>
        <Text style={[typography.bigGameFont, typography.center]}>
          { count }
        </Text>
      </View>
    );
  }

  renderPrompt(scenarioState: ScenarioStateHelper) {
    const { id, prompt } = this.props;
    const hasDecision = scenarioState.hasCount(id);
    return (
      <>
        <View style={styles.promptRow}>
          <CardTextComponent text={prompt} />
          { hasDecision ? (
            this.renderCount(scenarioState.count(id))
          ) : (
            <PlusMinusButtons
              count={this.state.value}
              limit={this.props.max}
              min={this.props.min}
              onIncrement={this._inc}
              onDecrement={this._dec}
              countRender={this.renderCount(this.state.value)}
            />
          ) }
        </View>
        { !hasDecision && <Button title="Done" onPress={this._submit} /> }
      </>
    );
  }


  renderCorrectResults(scenarioState: ScenarioStateHelper) {
    const {
      id,
      options,
      effects,
    } = this.props;
    if (options) {
      if (!scenarioState.hasCount(id)) {
        return null;
      }
      const count = scenarioState.count(id);
      const theOption = find(options, option => option.numCondition === count);
      if (!theOption) {
        return null;
      }
      return this.renderResult(theOption);
    }
    if (effects) {
      // We summarize the text of the effects in the guide text for number
      // inputs.
      return (
        <EffectsComponent id={id} effects={effects} skipCampaignLog />
      );
    }
    return null;
  }

  renderResult(choice: Option) {
    const { id } = this.props;
    if (choice.effects) {
      return (
        <EffectsComponent id={id} effects={choice.effects} />
      );
    }
    if (choice.steps) {
      return null;
    }
    if (choice.resolution) {
      return (
        <Text>Resolution { choice.resolution }</Text>
      );
    }
    return <Text>Unknown!</Text>;
  }

  render() {
    const { bulletType, text } = this.props;
    return (
      <ScenarioGuideContext.Consumer>
        { ({ scenarioState }: ScenarioGuideContextType) => (
          <>
            <SetupStepWrapper bulletType={bulletType}>
              { !!text && <CardTextComponent text={text} /> }
            </SetupStepWrapper>
            { this.renderPrompt(scenarioState) }
            <SetupStepWrapper bulletType="none">
              { this.renderCorrectResults(scenarioState) }
            </SetupStepWrapper>
          </>
        ) }
      </ScenarioGuideContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  count: {
    paddingLeft: 4,
    paddingRight: 4,
    minWidth: 40,
  },
  promptRow: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#888',
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});