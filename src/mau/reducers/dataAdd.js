import { createSlice } from "@reduxjs/toolkit";

export const dataAddSlice = createSlice({
    name: "dataAdd",
    initialState: {
        sieuam: [],
        employee: [],
        nhomthuoc:[],
        loaithuoc:[],
        donvitinh: [],
        nhomin: [],
        nuocsanxuat:[],
        hangsanxuat:[],
        thuocvtyt: [],
        dichvukythuat: [],
        giadvkt: []
    },
    reducers: {
        setDataEmployee: (state, action) => {
            state.employee = action.payload;
        },
        setDataSieuAm: (state, action) => {
            state.sieuam = action.payload;
        },
        setDataNhomThuoc: (state, action) => {
            state.nhomthuoc = action.payload;
        },
        setDataLoaiThuoc: (state, action) => {
            state.loaithuoc = action.payload;
        },
        setDataDonViTinh: (state, action) => {
            state.donvitinh = action.payload;
        },
        setDataNhomIn: (state, action) => {
            state.nhomin = action.payload;
        },
        setDataNuocSanXuat: (state, action) => {
            state.nuocsanxuat = action.payload;
        },
        setDataHangSanXuat: (state, action) => {
            state.hangsanxuat = action.payload;
        },
        setDataThuocVTYT: (state, action) => {
            state.thuocvtyt = action.payload;
        },
        setDataDichVuKyThuat: (state, action) => {
            state.dichvukythuat = action.payload;
        },
        setDataGiaDVKT: (state, action) => {
            state.dichvukythuat = action.payload;
        }
    },
});

export const {
    //Employee
    setDataEmployee,
    setDataSieuAm,
    setDataNhomThuoc,
    setDataLoaiThuoc,
    setDataDonViTinh,
    setDataNhomIn,
    setDataNuocSanXuat,
    setDataHangSanXuat,
    setDataThuocVTYT,
    setDataDichVuKyThuat,
    setDataGiaDVKT

} = dataAddSlice.actions;
export default dataAddSlice.reducer;
