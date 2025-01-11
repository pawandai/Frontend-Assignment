declare global {
  interface Window {
    TradingView: {
      widget: new (config: TradingViewWidgetConfig) => void;
    };
  }
}

export interface TradingViewWidgetConfig {
  width: string | number;
  height: string | number;
  symbol: string;
  interval: string;
  timezone?: string;
  theme?: "light" | "dark";
  style?: string | number;
  locale?: string;
  toolbar_bg?: string;
  hide_top_toolbar?: boolean;
  hide_side_toolbar?: boolean;
  container_id: string;
}
