import { ConfigProvider } from "antd";
import { ReactNode } from "react";

type AntPaginationProps = {
    children: ReactNode,
    globalOptions?: {},
    paginationOptions?: {},
}

export const AntPagination = ({children, globalOptions, paginationOptions}: AntPaginationProps) => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              itemSize: 30,
              itemActiveBg: "disable",   
              ...paginationOptions    
            },
          },
          token: {
            fontSizeSM: 10,
            colorBgTextActive: "#4167CF",
            colorText: "#314D9B",
            colorTextDisabled: "#213468",
            ...globalOptions
          },
        }}>
        <div className="pagination flex mt-4 justify-center">
          {children}
        </div>
      </ConfigProvider>
    </>
  );
};
