export interface CourseRun {
  date?: string;
}

export interface CourseFilter {
  key: string;
  label: string;
}

export interface CourseFilters {
  key: string;
  label: string;
  filters: [];
}

export interface Course {
  title: string;
  partner: string[];
  partner_keys: string[];
  product_source: string;
  primary_description: string;
  secondary_description: string;
  tertiary_description: string;
  tags: string[];
  availability: string[];
  subject: string[];
  level: string[];
  language: string[];
  product: string;
  program_type: string[];
  staff: string[];
  allowed_in: string[];
  blocked_in: string[];
  subscription_eligible: null | string;
  subscription_prices: string[];
  learning_type: string[];
  availability_rank: number;
  recent_enrollment_count: number;
  value_per_click_usa: number;
  value_per_click_international: number;
  value_per_lead_usa: number;
  value_per_lead_international: number;
  marketing_url: string;
  card_image_url: string;
  uuid: string;
  weeks_to_complete: number;
  max_effort: number;
  min_effort: number;
  organization_short_code_override: string;
  organization_logo_override: null | string;
  meta_title: null | string;
  display_on_org_page: boolean;
  external_url: null | string;
  active_run_key: string;
  active_run_start: number;
  active_run_type: string;
  owners: {
    key: string;
    logoImageUrl: string;
    name: string;
  }[];
  course_titles: null | string[];
  skills: string[];
  contentful_fields: null | string[];
  product_key: string;
  product_marketing_video_url: null | string;
  _geoloc: {
    lat: number;
    lng: number;
  };
  objectID: string;
  _highlightResult: {
    title: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    partner: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    }[];
    partner_keys: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    }[];
    primary_description: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    secondary_description: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    tertiary_description: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
  };
};
