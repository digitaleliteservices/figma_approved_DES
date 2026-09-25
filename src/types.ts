export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: 'crosshair' | 'palette' | 'code' | 'send' | 'cog';
  shortDesc: string;
}

export interface ValuePillar {
  id: string;
  title: string;
  iconName: 'users' | 'trending-up' | 'lightbulb' | 'shield-check';
}
