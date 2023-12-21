import { useFormik } from "formik"

export interface CustomInputParamsType {
    title: string,
    placeholder: string
    name: string
    value: any
    formik: ReturnType<typeof useFormik>
    autoCapitalize?: boolean
    helperText?: string,
    touched: boolean | undefined,
    error: undefined | string
}
