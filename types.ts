export interface VideoQuality {
  label: string;
  resolution: string;
  size: string;
  url: string; // Mock URL
  type: 'MP4' | 'WEBM';
}

export interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  author: string;
  qualities: VideoQuality[];
}

export interface DownloadHistoryItem {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
}

export enum AppState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}