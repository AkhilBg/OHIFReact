/** UTILS */
//import utils from './utils';
//export { utils };

/** CONTEXT/HOOKS */
// Export types - need to do as two lines due to a bug in babel
import * as Types from './types';

export {
  useCine,
  CineProvider,
  DialogProvider,
  useDialog,
  withDialog,
  DragAndDropProvider,
  ModalProvider,
  ModalConsumer,
  useModal,
  withModal,
  ImageViewerContext,
  ImageViewerProvider,
  useImageViewer,
  SnackbarProvider,
  useSnackbar,
  withSnackbar,
  ViewportDialogProvider,
  useViewportDialog,
  ViewportGridContext,
  ViewportGridProvider,
  useViewportGrid,
  UserAuthenticationContext,
  UserAuthenticationProvider,
  useUserAuthentication,
} from './contextProviders';

/** COMPONENTS */
export {
  AboutModal,
  HotkeyField,
  Header,
  UserPreferences,
  HotkeysPreferences,
  Button,
  ButtonGroup,
  ContextMenu,
  CinePlayer,
  DateRange,
  Dialog,
  Dropdown,
  EmptyStudies,
  ErrorBoundary,
  ExpandableToolbarButton,
  ListMenu,
  Icon,
  IconButton,
  Input,
  InputRange,
  InputDateRange,
  InputGroup,
  InputLabelWrapper,
  InputMultiSelect,
  InputText,
  Label,
  LayoutSelector,
  LoadingIndicatorProgress,
  MeasurementTable,
  Modal,
  NavBar,
  Notification,
  Select,
  SegmentationTable,
  SegmentationGroupTable,
  SidePanel,
  SplitButton,
  StudyBrowser,
  StudyItem,
  StudyListExpandedRow,
  StudyListFilter,
  StudyListPagination,
  StudyListTable,
  StudyListTableRow,
  StudySummary,
  Svg,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ThemeWrapper,
  Thumbnail,
  ThumbnailNoImage,
  ThumbnailTracked,
  ThumbnailList,
  ToolbarButton,
  ContextMenuMeasurements,
  Tooltip,
  TooltipClipboard,
  Typography,
  Viewport,
  ViewportActionBar,
  ViewportDownloadForm,
  ViewportGrid,
  ViewportPane,
  WindowLevelMenuItem,
  ImageScrollbar,
  ViewportOverlay,
  TextArea,
} from './components';

/** These are mostly used in the docs */
export { getIcon, ICONS, addIcon } from './components/Icon/getIcon';
export { BackgroundColor } from './pages/Colors/BackgroundColor';
export { ModalComponent } from './contextProviders/ModalComponent';
export { Types };
