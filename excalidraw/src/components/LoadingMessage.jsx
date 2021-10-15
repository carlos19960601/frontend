import { t } from "../i18n"

export const LoadingMessage = () => {
  return <div className="LoadingMessage">
    <span>{ t("labels.loadingScene")}</span>
  </div>
}