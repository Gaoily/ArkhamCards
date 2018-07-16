import { Navigation } from 'react-native-navigation';

import SearchMultiSelectView from '../components/SearchMultiSelectView';
import DeckDetailView from '../components/DeckDetailView';
import DeckEditView from '../components/DeckEditView';
import CardSearchView from '../components/CardSearchView';
import CardDetailView from '../components/CardDetailView';
import CardFaqView from '../components/CardFaqView';
import CardImageView from '../components/CardImageView';
import EditTraumaDialog from '../components/EditTraumaDialog';
import InvestigatorCardsView from '../components/InvestigatorCardsView';
import AddScenarioResultView from '../components/campaign/AddScenarioResultView';
import CampaignDetailView from '../components/campaign/CampaignDetailView';
import CampaignDifficultyDialog from '../components/campaign/CampaignDifficultyDialog';
import EditChaosBagDialog from '../components/campaign/EditChaosBagDialog';
import MyCampaignsView from '../components/campaign/MyCampaignsView';
import NewCampaignView from '../components/campaign/NewCampaignView';
import EditCampaignNotesDialog from '../components/campaign/EditCampaignNotesDialog';
import SelectCampaignDialog from '../components/campaign/SelectCampaignDialog';
import MyDecksView from '../components/MyDecksView';
import MyDecksSelectorDialog from '../components/MyDecksSelectorDialog';
import NewDeckView from '../components/NewDeckView';
import DrawSimulatorView from '../components/DrawSimulatorView';
import DeckChartsView from '../components/DeckChartsView';
import DeckUpgradeDialog from '../components/DeckUpgradeDialog';
import CardFilterView from '../components/filter/CardFilterView';
import CardEnemyFilterView from '../components/filter/CardEnemyFilterView';
import CardLocationFilterView from '../components/filter/CardLocationFilterView';
import WebViewWrapper from '../components/WebViewWrapper';
import SettingsDrawer from '../components/SettingsDrawer';
import PackCardsView from '../components/PackCardsView';
import SpoilersView from '../components/SpoilersView';
import CollectionEditView from '../components/CollectionEditView';
import CardSortDialog from '../components/CardSortDialog';
import ScenarioDialog from '../components/ScenarioDialog';
import ExileCardDialog from '../components/ExileCardDialog';
import BrowseInvestigatorsView from '../components/BrowseInvestigatorsView';
import HomeView from '../components/HomeView';
import AboutView from '../components/AboutView';
import NewWeaknessSetDialog from '../components/weakness/NewWeaknessSetDialog';
import WeaknessSetView from '../components/weakness/WeaknessSetView';
import WeaknessSetChooserView from '../components/weakness/WeaknessSetChooserView';
import WeaknessDrawDialog from '../components/weakness/WeaknessDrawDialog';
import EditAssignedWeaknessDialog from '../components/weakness/EditAssignedWeaknessDialog';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('Home', () => HomeView, store, Provider);
  Navigation.registerComponent('About', () => AboutView, store, Provider);
  Navigation.registerComponent('Browse.Cards', () => CardSearchView, store, Provider);
  Navigation.registerComponent('Browse.Investigators', () => BrowseInvestigatorsView, store, Provider);
  Navigation.registerComponent('Browse.InvestigatorCards', () => InvestigatorCardsView, store, Provider);
  Navigation.registerComponent('Deck', () => DeckDetailView, store, Provider);
  Navigation.registerComponent('Deck.Charts', () => DeckChartsView, store, Provider);
  Navigation.registerComponent('Deck.DrawSimulator', () => DrawSimulatorView, store, Provider);
  Navigation.registerComponent('Deck.Edit', () => DeckEditView, store, Provider);
  Navigation.registerComponent('Deck.Upgrade', () => DeckUpgradeDialog, store, Provider);
  Navigation.registerComponent('Deck.New', () => NewDeckView, store, Provider);
  Navigation.registerComponent('Card', () => CardDetailView, store, Provider);
  Navigation.registerComponent('Card.Faq', () => CardFaqView, store, Provider);
  Navigation.registerComponent('Card.Image', () => CardImageView, store, Provider);
  Navigation.registerComponent('My.Campaigns', () => MyCampaignsView, store, Provider);
  Navigation.registerComponent('My.Decks', () => MyDecksView, store, Provider);
  Navigation.registerComponent('Campaign', () => CampaignDetailView, store, Provider);
  Navigation.registerComponent('Campaign.New', () => NewCampaignView, store, Provider);
  Navigation.registerComponent('Campaign.AddResult', () => AddScenarioResultView, store, Provider);
  Navigation.registerComponent('Settings', () => SettingsDrawer, store, Provider);
  Navigation.registerComponent('SearchFilters', () => CardFilterView, store, Provider);
  Navigation.registerComponent('SearchFilters.Enemy', () => CardEnemyFilterView, store, Provider);
  Navigation.registerComponent('SearchFilters.Location', () => CardLocationFilterView, store, Provider);
  Navigation.registerComponent('SearchFilters.Chooser', () => SearchMultiSelectView, store, Provider);
  Navigation.registerComponent('CollectionEdit', () => CollectionEditView, store, Provider);
  Navigation.registerComponent('Pack', () => PackCardsView, store, Provider);
  Navigation.registerComponent('EditSpoilers', () => SpoilersView, store, Provider);
  Navigation.registerComponent('WebView', () => WebViewWrapper, store, Provider);
  Navigation.registerComponent('Dialog.DeckSelector', () => MyDecksSelectorDialog, store, Provider);
  Navigation.registerComponent('Dialog.EditTrauma', () => EditTraumaDialog, store, Provider);
  Navigation.registerComponent('Dialog.EditCampaignNotes', () => EditCampaignNotesDialog, store, Provider);
  Navigation.registerComponent('Dialog.EditChaosBag', () => EditChaosBagDialog, store, Provider);
  Navigation.registerComponent('Dialog.ExileCards', () => ExileCardDialog, store, Provider);
  Navigation.registerComponent('Dialog.Sort', () => CardSortDialog, store, Provider);
  Navigation.registerComponent('Dialog.Scenario', () => ScenarioDialog, store, Provider);
  Navigation.registerComponent('Dialog.Campaign', () => SelectCampaignDialog, store, Provider);
  Navigation.registerComponent('Dialog.CampaignDifficulty', () => CampaignDifficultyDialog, store, Provider);
  Navigation.registerComponent('Weakness.New', () => NewWeaknessSetDialog, store, Provider);
  Navigation.registerComponent('Weakness.Chooser', () => WeaknessSetChooserView, store, Provider);
  Navigation.registerComponent('Weakness.Detail', () => WeaknessSetView, store, Provider);
  Navigation.registerComponent('Weakness.Draw', () => WeaknessDrawDialog, store, Provider);
  Navigation.registerComponent('Weakness.EditAssigned', () => EditAssignedWeaknessDialog, store, Provider);
}
