/* eslint-disable */
/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Schema = AllCampaigns | Log | Errata | Rules | ChaosTokens | TabooSets;
export type Step =
  | BranchStep
  | EffectsStep
  | InputStep
  | EncounterSetsStep
  | GenericStep
  | ResolutionStep
  | RuleReminderStep
  | StoryStep
  | LocationSetupStep
  | LocationConnectorsStep
  | TableStep
  | CampaignLogCountStep
  | XpCountStep
  | InternalStep
  | BorderStep;
export type Condition =
  | MultiCondition
  | CampaignLogCondition
  | CampaignLogCountCondition
  | CampaignLogInvestigatorCountCondition
  | MathCondition
  | CardCondition
  | CampaignDataCondition
  | CampaignLogSectionExistsCondition
  | ScenarioDataCondition
  | TraumaCondition
  | CheckSuppliesCondition
  | CampaignLogCardsCondition
  | CampaignLogCardsSwitchCondition
  | PartnerStatusCondition;
export type Effect =
  | StoryStepEffect
  | EarnXpEffect
  | AddCardEffect
  | AddWeaknessEffect
  | RemoveCardEffect
  | ReplaceCardEffect
  | TraumaEffect
  | PartnerStatusEffect
  | CampaignLogEffect
  | CampaignLogCardsEffect
  | CampaignLogCountEffect
  | CampaignLogInvestigatorCountEffect
  | CampaignDataEffect
  | ScenarioDataEffect
  | AddRemoveChaosTokenEffect
  | FreeformCampaignLogEffect
  | UpgradeDecksEffect
  | SaveDecksEffect
  | GainSuppliesEffect
  | CheckCampaignLogCardsEffect
  | CheckCampaignLogCountEffect;
export type SpecialXp = "resupply_points" | "supply_points" | "unspect_xp";
export type InvestigatorSelector =
  | "lead_investigator"
  | "all"
  | "any"
  | "choice"
  | "defeated"
  | "not_resigned"
  | "any_resigned"
  | "$input_value"
  | "$fixed_investigator";
export type BulletType = "none" | "small" | "default";
export type CampaignDataEffect =
  | CampaignDataResultEffect
  | CampaignDataDifficultyEffect
  | CampaignDataNextScenarioEffect
  | CampaignDataSwapChaosBagEffect
  | CampaignDataRedirectExperienceEffect;
export type CampaignResult = "win" | "lose" | "survived";
export type Difficulty = "easy" | "standard" | "hard" | "expert";
export type ScenarioDataEffect =
  | ScenarioDataInvestigatorEffect
  | ScenarioDataInvestigatorStatusEffect
  | ScenarioDataStatusEffect;
export type InvestigatorStatus = "alive" | "resigned" | "physical" | "mental" | "eliminated";
export type ScenarioStatus = "not_started" | "skipped" | "started" | "resolution" | "completed" | "unlocked";
export type ChaosToken = ("+1" | "0" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8") | SpecialChaosToken;
export type SpecialChaosToken =
  | "skull"
  | "cultist"
  | "tablet"
  | "elder_thing"
  | "elder_sign"
  | "auto_fail"
  | "bless"
  | "curse"
  | "frost";
export type BorderColor = "setup" | "resolution" | "interlude";
export type ChoiceIcon = "mental" | "physical" | "resign" | "dismiss" | "accept";
export type DefaultOption = Option;
export type MathCondition = MathCompareCondition | MathSumCondition | MathEqualsCondition;
export type Operand = CampaignLogCountOperand | ChaosBagOperand | ConstantOperand | PartnerStatusCondition;
export type PartnerStatus =
  | "eliminated"
  | "alive"
  | "has_damage"
  | "has_horror"
  | "mia"
  | "safe"
  | "resolute"
  | "investigator_defeated"
  | "investigator_selected"
  | "victim"
  | "cannot_take";
export type CardCondition = InvestigatorCardCondition | BinaryCardCondition;
export type CampaignDataCondition =
  | CampaignDataDifficultyCondition
  | CampaignDataScenarioCondition
  | CampaignDataChaosBagCondition
  | CampaignDataInvestigatorCondition
  | CampaignDataLinkedCondition
  | CampaignDataVersionCondition;
export type ScenarioDataCondition =
  | ScenarioDataResolutionCondition
  | ScenarioDataInvestigatorStatusCondition
  | ScenarioDataPlayerCountCondition;
export type TraumaCondition = KilledTraumaCondition | BasicTraumaCondition;
export type CheckSuppliesCondition = CheckSuppliesAllCondition | CheckSuppliesAnyCondition;
export type Input =
  | UpgradeDecksInput
  | CardChoiceInput
  | SuppliesInput
  | UseSuppliesInput
  | InvestigatorChoiceInput
  | ChooseOneInput
  | ChecklistInput
  | CounterInput
  | InvestigatorCounterInput
  | InvestigatorChoiceWithSuppliesInput
  | ScenarioInvestigatorsInput
  | PlayScenarioInput
  | TextBoxInput
  | ReceiveCampaignLinkInput
  | SendCampaignLinkInput
  | RandomLocationInput
  | PrologueRandomizer
  | SaveDecksInput
  | TarotReadingInput
  | PartnerTraumaInput
  | InvestigatorPartnerChoiceInput
  | PartnerChoiceInput;
export type CardQuery = CardSearchQuery | CardCodeList;
export type UseSuppliesInput = UseSuppliesChoiceInput | UseSuppliesAllInput;
export type InvestigatorChoiceCondition =
  | InvestigatorCardCondition
  | BasicTraumaCondition
  | InvestigatorCondition
  | CampaignLogCondition;
export type BinaryChoiceCondition =
  | BinaryCardCondition
  | CampaignDataInvestigatorCondition
  | CampaignDataScenarioCondition
  | CampaignDataChaosBagCondition
  | CampaignLogCondition
  | CampaignLogCountCondition
  | CampaignLogSectionExistsCondition
  | MultiCondition
  | PartnerStatusCondition;
export type LocationConnector = "purple_moon" | "blue_triangle" | "red_square" | "orange_heart" | "green_diamond";
export type AllCampaigns = FullCampaign[];
export type Choice1 =
  | CardChoice
  | SuppliesChoice
  | SelectChoice
  | InvestigatorCounterChoice
  | CounterChoice
  | InvestigatorChoice;
export type SingleChaosTokenValue = SimpleChaosTokenValue | CounterChaosTokenValue | ConditionChaosTokenValue;
export type ChaosTokens = ScenarioChaosTokens[];
export type TabooSets = TabooSet[];

export interface FullCampaign {
  campaign: Campaign;
  scenarios: Scenario[];
}
export interface Campaign {
  id: string;
  name: string;
  tarot: boolean;
  campaign_length: number;
  version: number;
  position: number;
  cards?: {
    code: string;
    name: string;
    gender?: "male" | "female";
    description?: string;
  }[];
  campaign_log: {
    id: string;
    title: string;
    type?: "investigator_count" | "count" | "supplies" | "header" | "partner" | "hidden";
    partners?: Partner[];
  }[];
  scenarios: string[];
  hidden_scenarios?: string[];
  setup: string[];
  steps: Step[];
  side_scenario_steps?: Step[];
  campaign_type: "standalone" | "campaign";
  custom?: CustomData;
  achievements?: Achievement[];
}
export interface Partner {
  code: string;
  name: string;
  description?: string;
  health: number;
  sanity: number;
  resolute_health?: number;
  resolute_sanity?: number;
}
export interface BranchStep {
  id: string;
  type: "branch";
  border_only?: boolean;
  hidden?: boolean;
  loop?: boolean;
  text?: string;
  title?: string;
  condition: Condition;
  bullet_type?: BulletType;
  narration?: Narration;
}
export interface MultiCondition {
  type: "multi";
  conditions: (
    | CampaignLogCondition
    | CampaignLogSectionExistsCondition
    | CampaignDataChaosBagCondition
    | CampaignLogCountCondition
    | CampaignDataVersionCondition
    | CampaignDataScenarioCondition
    | ScenarioDataResolutionCondition
    | InvestigatorCardCondition
    | BinaryCardCondition
    | MathCondition
    | PartnerStatusCondition
    | BasicTraumaCondition
  )[];
  count: number;
  options: BoolOption[];
}
export interface CampaignLogCondition {
  type: "campaign_log";
  section: string;
  id: string;
  options: BoolOption[];
}
export interface BoolOption {
  boolCondition: boolean;
  prompt?: string;
  effects?: Effect[];
  border?: boolean;
  border_color?: BorderColor;
  pre_border_effects?: Effect[];
  steps?: string[];
}
export interface StoryStepEffect {
  type: "story_step";
  steps: string[];
}
export interface EarnXpEffect {
  type: "earn_xp";
  investigator: "all" | "defeated" | "$input_value" | "lead_investigator" | "$fixed_investigator";
  fixed_investigator?: string;
  bonus?: number;
  input_scale?: number;
  special_xp?: SpecialXp;
  transfer_special_xp?: SpecialXp;
}
export interface AddCardEffect {
  type: "add_card";
  investigator: InvestigatorSelector;
  fixed_investigator?: string;
  optional?: boolean;
  card: string;
  ignore_deck_limit?: boolean;
  non_story?: boolean;
  show_prompt?: boolean;
  hidden?: boolean;
}
export interface AddWeaknessEffect {
  type: "add_weakness";
  investigator: "all" | "$input_value" | "lead_investigator";
  weakness_traits: string[];
  select_traits?: boolean;
  count?: "$input_value";
  standalone?: boolean;
  choose_only?: boolean;
}
export interface RemoveCardEffect {
  type: "remove_card";
  investigator?: "choice" | "$input_value" | "$fixed_investigator";
  fixed_investigator?: string;
  card: string;
  non_story?: boolean;
  hidden?: boolean;
}
export interface ReplaceCardEffect {
  type: "replace_card";
  old_card: string;
  new_card: string;
}
export interface TraumaEffect {
  type: "trauma";
  investigator: "all" | "lead_investigator" | "defeated" | "not_resigned" | "$input_value";
  heal_input?: "physical" | "mental";
  mental?: number;
  physical?: number;
  mental_or_physical?: number;
  killed?: boolean;
  insane?: boolean;
  hidden?: boolean;
  bullet_type?: BulletType;
}
export interface PartnerStatusEffect {
  type: "partner_status";
  section: string;
  partner: "$input_value" | "$fixed_partner";
  fixed_partner?: string;
  operation: "add" | "remove";
  status:
    | "eliminated"
    | "resolute"
    | "mia"
    | "safe"
    | "victim"
    | "cannot_take"
    | "the_entity"
    | "heal_damage"
    | "heal_horror";
  hidden?: boolean;
  bullet_type?: BulletType;
}
export interface CampaignLogEffect {
  type: "campaign_log";
  section: string;
  id: string;
  text?: string;
  cross_out?: boolean;
  bullet_type?: BulletType;
  decorate?: "circle";
  remove?: boolean;
  hidden?: boolean;
}
export interface CampaignLogCardsEffect {
  type: "campaign_log_cards";
  section: string;
  id?: string;
  text?: string;
  masculine_text?: string;
  feminine_text?: string;
  cards?: "$lead_investigator" | "$all_investigators" | "$defeated_investigators" | "$input_value" | "$fixed_codes";
  codes?: string[];
  cross_out?: boolean;
  remove?: boolean;
  hidden?: boolean;
  bullet_type?: BulletType;
}
export interface CampaignLogCountEffect {
  type: "campaign_log_count";
  section: string;
  id?: string;
  operation: "set_input" | "set" | "add_input" | "add" | "subtract_input";
  value?: number;
  text?: string;
}
export interface CampaignLogInvestigatorCountEffect {
  type: "campaign_log_investigator_count";
  section: string;
  id: string;
  investigator: "all" | "defeated" | "$input_value" | "lead_investigator" | "$fixed_investigator";
  fixed_investigator?: string;
  operation: "set_input" | "set" | "add_input" | "add";
  value?: number;
  text?: string;
}
export interface CampaignDataResultEffect {
  type: "campaign_data";
  setting: "result";
  value: CampaignResult;
}
export interface CampaignDataDifficultyEffect {
  type: "campaign_data";
  setting: "difficulty";
  value: Difficulty;
}
export interface CampaignDataNextScenarioEffect {
  type: "campaign_data";
  setting: "next_scenario" | "skip_scenario" | "replay_scenario";
  scenario: string;
}
export interface CampaignDataSwapChaosBagEffect {
  type: "campaign_data";
  setting: "swap_chaos_bag";
  initialize?: boolean;
}
export interface CampaignDataRedirectExperienceEffect {
  type: "campaign_data";
  setting: "redirect_experience";
  investigator_count: string;
}
export interface ScenarioDataInvestigatorEffect {
  type: "scenario_data";
  setting: "lead_investigator" | "playing_scenario";
  investigator: "$input_value";
}
export interface ScenarioDataInvestigatorStatusEffect {
  type: "scenario_data";
  setting: "investigator_status";
  investigator: "$input_value";
  investigator_status: InvestigatorStatus;
}
export interface ScenarioDataStatusEffect {
  type: "scenario_data";
  setting: "scenario_status";
  status: ScenarioStatus;
  resolution?: string;
}
export interface AddRemoveChaosTokenEffect {
  type: "add_chaos_token" | "remove_chaos_token";
  tokens: ChaosToken[];
}
export interface FreeformCampaignLogEffect {
  type: "freeform_campaign_log";
  section: "campaign_notes";
  scenario_id?: string;
  index?: number;
  bullet_type?: BulletType;
  hidden?: boolean;
}
export interface UpgradeDecksEffect {
  type: "upgrade_decks";
}
export interface SaveDecksEffect {
  type: "save_decks";
}
export interface GainSuppliesEffect {
  type: "gain_supplies";
  section: string;
  supplies: Supply[];
  investigator: "$input_value";
}
export interface Supply {
  id: string;
  name: string;
  description: string;
  cost: number;
  multiple?: boolean;
}
export interface CheckCampaignLogCardsEffect {
  type: "check_campaign_log_cards";
  card_type: "player" | "encounter";
  text?: string;
  masculine_text?: string;
  feminine_text?: string;
  bullet_type?: BulletType;
}
export interface CheckCampaignLogCountEffect {
  type: "check_campaign_log_count";
  text: string;
  bullet_type?: BulletType;
}
export interface CampaignLogSectionExistsCondition {
  type: "campaign_log_section_exists";
  section: string;
  options: BoolOption[];
}
export interface CampaignDataChaosBagCondition {
  type: "campaign_data";
  campaign_data: "chaos_bag";
  token: ChaosToken;
  options: NumOption[];
  default_option?: Option;
}
export interface NumOption {
  numCondition: number;
  effects?: Effect[];
  border?: boolean;
  border_color?: BorderColor;
  steps?: string[];
}
export interface Option {
  icon?: ChoiceIcon;
  boolCondition?: boolean;
  numCondition?: number;
  condition?: string;
  prompt?: string;
  border?: boolean;
  border_color?: BorderColor;
  pre_border_effects?: Effect[];
  effects?: Effect[];
  steps?: string[];
}
export interface CampaignLogCountCondition {
  type: "campaign_log_count";
  section: string;
  id: string;
  options: NumOption[];
  max?: number;
  default_option?: DefaultOption;
}
export interface CampaignDataVersionCondition {
  type: "campaign_data";
  campaign_data: "version";
  min_version: number;
  options: BoolOption[];
}
export interface CampaignDataScenarioCondition {
  type: "campaign_data";
  campaign_data: "scenario_completed" | "scenario_replayed";
  scenario: string;
  options: BoolOption[];
}
export interface ScenarioDataResolutionCondition {
  type: "scenario_data";
  scenario_data: "resolution";
  options: StringOption[];
}
export interface StringOption {
  condition: string;
  prompt?: string;
  border?: boolean;
  border_color?: BorderColor;
  pre_border_effects?: Effect[];
  effects?: Effect[];
  steps?: string[];
}
export interface InvestigatorCardCondition {
  type: "has_card";
  investigator: "each";
  card: string;
  options: BoolOption[];
}
export interface BinaryCardCondition {
  type: "has_card";
  investigator: "defeated" | "any";
  card: string;
  options: BoolOption[];
}
export interface MathCompareCondition {
  type: "math";
  opA: Operand;
  opB: Operand;
  operation: "compare";
  options: NumOption[];
}
export interface CampaignLogCountOperand {
  type: "campaign_log_count";
  section: string;
  id?: string;
}
export interface ChaosBagOperand {
  type: "chaos_bag";
  token: ChaosToken;
}
export interface ConstantOperand {
  type: "constant";
  value: number;
}
export interface PartnerStatusCondition {
  type: "partner_status";
  section: string;
  partner: "any" | "$fixed_partner";
  fixed_partner?: string;
  status: PartnerStatus[];
  operation: "any" | "all";
  options: BoolOption[];
}
export interface MathSumCondition {
  type: "math";
  opA: Operand;
  opB: Operand;
  operation: "sum";
  options: NumOption[];
  default_option: DefaultOption;
}
export interface MathEqualsCondition {
  type: "math";
  opA: Operand;
  opB: Operand;
  operation: "equals";
  options: BoolOption[];
}
export interface BasicTraumaCondition {
  type: "trauma";
  investigator: "each";
  trauma: "physical" | "mental" | "alive";
  options: BoolOption[];
}
export interface CampaignLogInvestigatorCountCondition {
  type: "campaign_log_investigator_count";
  section: string;
  investigator: "any" | "all";
  options: NumOption[];
  default_option?: DefaultOption;
}
export interface CampaignDataDifficultyCondition {
  type: "campaign_data";
  campaign_data: "difficulty";
  options: StringOption[];
}
export interface CampaignDataInvestigatorCondition {
  type: "campaign_data";
  campaign_data: "investigator";
  investigator_data: "trait" | "faction" | "code";
  options: StringOption[];
  default_option?: Option;
}
export interface CampaignDataLinkedCondition {
  type: "campaign_data";
  campaign_data: "linked_campaign";
  options: BoolOption[];
}
export interface ScenarioDataInvestigatorStatusCondition {
  type: "scenario_data";
  scenario_data: "investigator_status";
  investigator: "defeated" | "resigned";
  options: BoolOption[];
}
export interface ScenarioDataPlayerCountCondition {
  type: "scenario_data";
  scenario_data: "player_count";
  options: NumOption[];
}
export interface KilledTraumaCondition {
  type: "trauma";
  investigator: "lead_investigator" | "all";
  trauma: "killed" | "insane";
  options: BoolOption[];
}
export interface CheckSuppliesAllCondition {
  type: "check_supplies";
  investigator: "all";
  section: string;
  id: string;
  name: string;
  prompt?: string;
  options: BoolOption[];
  show_result?: boolean;
}
export interface CheckSuppliesAnyCondition {
  type: "check_supplies";
  investigator: "any";
  section: string;
  id: string;
  name: string;
  prompt?: string;
  options: BoolOption[];
}
export interface CampaignLogCardsCondition {
  type: "campaign_log_cards";
  section: string;
  id: string;
  options: BoolOption[];
}
export interface CampaignLogCardsSwitchCondition {
  type: "campaign_log_cards_switch";
  section: string;
  id: string;
  options: StringOption[];
}
export interface Narration {
  id: string;
  name: string;
  lang: string[];
}
export interface EffectsStep {
  border_only?: boolean;
  id: string;
  type: "effects";
  text?: null;
  title?: null;
  effectsWithInput: EffectsWithInput[];
  stepText: boolean;
  bullet_type?: BulletType;
  narration?: Narration;
  syntheticId?: boolean;
}
export interface EffectsWithInput {
  border?: boolean;
  border_color?: BorderColor;
  effects: Effect[];
  input?: string[];
  numberInput?: number[];
}
export interface InputStep {
  id: string;
  type: "input";
  title?: string;
  text?: string;
  input: Input;
  bullet_type?: BulletType;
  prompt_type?: "header" | "setup";
  border_only?: boolean;
  narration?: Narration;
}
export interface UpgradeDecksInput {
  type: "upgrade_decks";
  skip_decks?: boolean;
  special_xp?: SpecialXp;
  counter?: string;
  story_cards?: [string];
}
export interface CardChoiceInput {
  type: "card_choice";
  include_counts?: boolean;
  query: CardQuery[];
  choices: Choice[];
  campaign_log_condition?: CampaignLogCardsCondition;
  min?: number;
  max?: number;
}
export interface CardSearchQuery {
  source: "scenario" | "deck";
  trait?: string;
  unique?: boolean;
  vengeance?: boolean;
  exclude_code?: string[];
  code?: null;
}
export interface CardCodeList {
  code: string[];
  source?: null;
}
export interface Choice {
  id: string;
  large?: boolean;
  text: string;
  confirm_text?: string;
  feminine_text?: string;
  masculine_text?: string;
  description?: string;
  steps?: string[];
  border?: boolean;
  border_color?: BorderColor;
  pre_border_effects?: Effect[];
  effects?: Effect[];
}
export interface SuppliesInput {
  type: "supplies";
  points: number[];
  supplies: Supply[];
  section: string;
  special_xp?: SpecialXp;
}
export interface UseSuppliesChoiceInput {
  type: "use_supplies";
  section: string;
  id: string;
  name: string;
  prompt: string;
  investigator: "choice";
  min: number;
  max: number;
  choices: BoolOption[];
}
export interface UseSuppliesAllInput {
  type: "use_supplies";
  section: string;
  id: string;
  name: string;
  prompt: string;
  investigator: "all";
  choices: BoolOption[];
}
export interface InvestigatorChoiceInput {
  type: "investigator_choice";
  source: "campaign" | "scenario";
  optional?: boolean;
  investigator: "all" | "choice" | "any" | "resigned";
  condition?: BasicTraumaCondition;
  special_mode?: "detailed" | "sequential";
  confirm_text?: string;
  choices: InvestigatorConditionalChoice[];
}
export interface InvestigatorConditionalChoice {
  icon?: ChoiceIcon;
  id: string;
  text: string;
  selected_text?: string;
  selected_text_feminine?: string;
  description?: string;
  condition?: InvestigatorChoiceCondition;
  border?: boolean;
  border_color?: BorderColor;
  pre_border_effects?: Effect[];
  steps?: string[];
  effects?: Effect[];
}
export interface InvestigatorCondition {
  type: "investigator";
  investigator: "each";
  investigator_data: "trait" | "faction" | "code";
  options: StringOption[];
}
export interface ChooseOneInput {
  type: "choose_one";
  default_choice?: string;
  confirm_text?: string;
  choices: BinaryConditionalChoice[];
}
export interface BinaryConditionalChoice {
  id: string;
  large?: boolean;
  text: string;
  gender?: "masculine" | "feminine";
  tokens?: ChaosToken[];
  description?: string;
  condition?: BinaryChoiceCondition;
  repeatable?: boolean;
  border?: boolean;
  border_color?: BorderColor;
  pre_border_effects?: Effect[];
  steps?: string[];
  effects?: Effect[];
}
export interface ChecklistInput {
  type: "checklist";
  choices: BinaryConditionalChoice[];
  text: string;
  min?: number;
  max?: number;
}
export interface CounterInput {
  type: "counter";
  text: string;
  confirm_text?: string;
  min?: number;
  max?: number;
  long_lived?: boolean;
  delta?: boolean;
  effects: Effect[];
}
export interface InvestigatorCounterInput {
  type: "investigator_counter";
  text: string;
  negative?: boolean;
  effects: Effect[];
  investigator_max?: "physical_trauma" | "mental_trauma";
  investigator_count_min?: string;
  max?: number;
  show_special_xp?: string;
}
export interface InvestigatorChoiceWithSuppliesInput {
  type: "investigator_choice_supplies";
  section: string;
  id: string;
  prompt: string;
  name: string;
  investigator: "choice";
  positiveChoice: Choice;
  negativeChoice: Choice;
}
export interface ScenarioInvestigatorsInput {
  type: "scenario_investigators";
  choose_none_steps?: string[];
  lead_investigator_effects?: Effect[];
}
export interface PlayScenarioInput {
  type: "play_scenario";
  branches?: BinaryConditionalChoice[];
  campaign_log?: BinaryConditionalChoice[];
  chaos_bag_branches?: string[];
  no_resolutions?: boolean;
}
export interface TextBoxInput {
  type: "text_box";
  undo?: boolean;
  effects: FreeformCampaignLogEffect[];
}
export interface ReceiveCampaignLinkInput {
  type: "receive_campaign_link";
  linked_prompt?: string;
  manual_prompt?: string;
  flip_campaign?: boolean;
  id: string;
  choices: Choice[];
}
export interface SendCampaignLinkInput {
  type: "send_campaign_link";
  id: string;
  decision: string;
  prompt?: string;
}
export interface RandomLocationInput {
  type: "random_location";
  cards: string[];
  multiple?: boolean;
}
export interface PrologueRandomizer {
  type: "prologue_randomizer";
  prompt: string;
  choices: BinaryConditionalChoice[];
  options: StringOption[];
}
export interface SaveDecksInput {
  type: "save_decks";
}
export interface TarotReadingInput {
  type: "tarot_reading";
  randomized: boolean;
  reading: "chaos" | "balance" | "choice" | "destiny";
}
export interface PartnerTraumaInput {
  type: "partner_trauma";
  section: string;
}
export interface InvestigatorPartnerChoiceInput {
  type: "investigator_choice_partner";
  condition: PartnerStatusCondition;
  prompt: string;
}
export interface PartnerChoiceInput {
  type: "partner_choice";
  condition: PartnerStatusCondition;
  random: boolean;
  quantity: ConstantOperand | CampaignLogCountOperand;
  prompt: string;
  effects: Effect[];
}
export interface EncounterSetsStep {
  id: string;
  type: "encounter_sets";
  border_only?: boolean;
  title?: string;
  text?: string;
  subtext?: string;
  aside?: boolean;
  encounter_sets: string[];
  bullet_type?: BulletType;
  narration?: Narration;
  remove?: boolean;
}
export interface GenericStep {
  border_only?: boolean;
  id: string;
  type?: null;
  title?: string;
  hidden?: boolean;
  text?: string;
  steps?: string[];
  effects?: Effect[];
  bullets?: {
    text: string;
  }[];
  bullet_type?: BulletType;
  narration?: Narration;
}
export interface ResolutionStep {
  border_only?: boolean;
  id: string;
  type: "resolution";
  resolution: string;
  text?: string;
  title?: null;
  generated?: boolean;
  effects?: ScenarioDataStatusEffect[];
  bullet_type?: null;
  narration?: Narration;
}
export interface RuleReminderStep {
  id: string;
  type: "rule_reminder";
  border_only?: boolean;
  text?: string;
  title?: string;
  bullets?: {
    text: string;
  }[];
  example?: string;
  bullet_type?: null;
  narration?: Narration;
}
export interface StoryStep {
  id: string;
  type: "story";
  border?: boolean;
  border_color?: BorderColor;
  border_only?: boolean;
  title?: string;
  text: string;
  bullets?: {
    text: string;
  }[];
  bullet_type?: null;
  narration?: Narration;
}
export interface LocationSetupStep {
  border_only?: boolean;
  id: string;
  type: "location_setup";
  svg?: string;
  text: string;
  title?: string;
  note?: string;
  vertical: "half" | "normal";
  horizontal: "half" | "normal" | "tight";
  locations: string[][];
  resource_dividers?: {
    right?: number;
    bottom?: number;
  }[][];
  location_names?: {
    code: string;
    name: string;
  }[];
  bullet_type?: null;
  narration?: Narration;
}
export interface LocationConnectorsStep {
  id: string;
  type: "location_connectors";
  title?: string;
  border_only?: boolean;
  text: string;
  subtext: string;
  location_connectors: LocationConnector[];
  bullet_type?: BulletType;
  narration?: Narration;
}
export interface TableStep {
  id: string;
  type: "table";
  border_only?: boolean;
  title?: string;
  text?: string;
  header: TableRow;
  rows: TableRow[];
  bullet_type?: BulletType;
  narration?: Narration;
}
export interface TableRow {
  cells: TableCell[];
}
export interface TableCell {
  text: string;
  size: number;
}
export interface CampaignLogCountStep {
  border_only?: boolean;
  id: string;
  type: "campaign_log_count";
  text_count: string;
  campaign_log_count: {
    section: string;
    id?: string;
  };
  bullet_type?: null;
  title?: string;
  text?: null;
  narration?: Narration;
}
export interface XpCountStep {
  border_only?: boolean;
  id: string;
  type: "xp_count";
  bullet_type?: null;
  title?: string;
  special_xp: SpecialXp;
  text?: null;
  narration?: Narration;
}
export interface InternalStep {
  border_only?: boolean;
  id: string;
  type: "internal";
  text?: null;
  hidden?: boolean;
  bullet_type?: null;
  title?: null;
  narration?: Narration;
}
export interface BorderStep {
  id: string;
  border_only?: boolean;
  type: "border";
  border: boolean;
  border_color?: BorderColor;
  title?: string;
  text?: null;
  bullets?: null;
  bullet_type?: null;
  narration?: Narration;
  steps: string[];
}
export interface CustomData {
  creator: string;
  download_link: {
    en: string;
    ko?: string;
    de?: string;
    es?: string;
    fr?: string;
    zh?: string;
    ru?: string;
    it?: string;
  };
}
export interface Achievement {
  id: string;
  title: string;
  text: string;
  type: "binary" | "count" | "list";
  max?: number;
  items?: {
    id: string;
    text: string;
  }[];
}
export interface Scenario {
  id: string;
  allow_side_scenario?: boolean;
  chaos_bag_card?: string;
  chaos_bag_card_text?: string;
  chaos_bag_card_back_text?: string;
  scenario_name: string;
  full_name: string;
  header: string;
  icon?: string;
  xp_cost?: number;
  side_scenario_type?: "challenge" | "standalone";
  challenge?: ChallengeData;
  custom?: CustomData;
  setup: string[];
  resolutions?: Resolution[];
  steps: Step[];
  type?: "interlude" | "epilogue" | "placeholder";
  standalone_setup?: string[];
}
export interface ChallengeData {
  investigator: string;
  xp_cost: number;
  requirements: {
    text: string;
  }[];
}
export interface Resolution {
  id: string;
  title: string;
  description?: string;
  text?: string;
  investigator_status?: InvestigatorStatus[];
  steps: string[];
  narration?: Narration;
}
export interface Log {
  campaignName: string;
  campaignCode: string;
  log: LogEntry[];
}
export interface LogEntry {
  id: string;
  choice?: Choice1;
}
export interface CardChoice {
  cards: string[];
}
export interface SuppliesChoice {
  supplies: {
    investigator: string;
    supplies: string[];
  }[];
}
export interface SelectChoice {
  choices: string[];
}
export interface InvestigatorCounterChoice {
  counts: {
    investigator: string;
    count?: number;
  }[];
}
export interface CounterChoice {
  count: number;
}
export interface InvestigatorChoice {
  investigators?: {
    investigator: string;
    deck?: string;
  }[];
}
export interface Errata {
  cards: ScenarioCardErrata[];
  faq: FaqEntry[];
}
export interface ScenarioCardErrata {
  encounter_code: string;
  cards: CardErrata[];
}
export interface CardErrata {
  code: string[];
  text: string;
}
export interface FaqEntry {
  scenario_code: string;
  questions: Question[];
}
export interface Question {
  question: string;
  answer: string;
}
export interface Rules {
  rules: Rule[];
}
export interface Rule {
  id: string;
  title: string;
  text?: string;
  table?: {
    row: {
      [k: string]: any;
    }[];
  }[];
  rules?: Rule[];
}
export interface ScenarioChaosTokens {
  code: string;
  scenario: string;
  standard: SingleChaosTokenValue[];
  hard: SingleChaosTokenValue[];
}
export interface SimpleChaosTokenValue {
  type?: null;
  token: SpecialChaosToken;
  text?: string;
  value: ChaosTokenModifier;
}
export interface ChaosTokenModifier {
  modifier: number | ("auto_fail" | "auto_succeed");
  reveal_another?: boolean;
  cancel_modifiers?: boolean;
}
export interface CounterChaosTokenValue {
  type: "counter";
  token: SpecialChaosToken;
  text?: string;
  counter: {
    prompt: string;
    min?: number;
    max?: number;
    scale?: number;
    reveal_another?: boolean;
    adjustment?: number;
    initial_value?: number;
    negate?: boolean;
  };
}
export interface ConditionChaosTokenValue {
  type: "condition";
  token: SpecialChaosToken;
  text?: string;
  condition: {
    prompt: string;
    default_value: ChaosTokenModifier;
    modified_value: ChaosTokenModifier;
  };
}
export interface TabooSet {
  id: number;
  code: string;
  name: string;
  active: number;
  date_start: string;
  cards: Taboo[];
}
export interface Taboo {
  code: string;
  xp?: number;
  description?: string;
  text?: string;
  exceptional?: number;
  deck_limit?: number;
}
