import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
  error: null,
  alerts: [],
  activityLogs: [],
  storeActivityLog: {},
};

const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    loadAlertsRequested(state, action) {
      state.loading = true;
      state.error = null;
    },
    loadAlertsSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.alerts = action?.payload?.data;
      state.paginationOption = {
        pageNumber: action.payload?.pageNumber,
        pageSize: action.payload?.pageSize,
        totalRecords: action.payload?.totalRecords,
        totalPages: action.payload?.totalPages,
      };
    },

    loadAlertsFail(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    loadActivityLogsRequested(state, action: PayloadAction<{ id: any }>) {
      state.loading = true;
      state.error = null;
    },
    loadActivityLogsSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.activityLogs = action.payload;
    },

    loadActivityLogsFail(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    storeActivityLogRequested(
      state,
      action: PayloadAction<{
        alert_id: any;
        user_id: any;
        action: any;
        resolve_reason?: string;
      }>
    ) {
      state.loading = true;
      state.error = null;
    },
    storeActivityLogSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.storeActivityLog = action.payload;
    },

    storeActivityLogFail(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadAlertsRequested,
  loadAlertsSuccess,
  loadAlertsFail,
  loadActivityLogsRequested,
  loadActivityLogsSuccess,
  loadActivityLogsFail,
  storeActivityLogRequested,
  storeActivityLogSuccess,
  storeActivityLogFail,
} = alertsSlice.actions;

export default alertsSlice.reducer;
