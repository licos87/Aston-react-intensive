import cls from './CompanyLogo.module.css';

interface CompanyLogoProps {
  companyUrl: string;
  imgUrl: string;
  imgWidth?: number;
  imgHeight?: number;
  altText?: string
}

export const CompanyLogo = ({
                              companyUrl,
                              imgUrl,
                              imgWidth = 40,
                              imgHeight = 40,
                              altText = 'Логотип фирмы'
                            }: CompanyLogoProps) => {
  return (
    <a
      className={cls.link}
      href={companyUrl}
    >
      <img
        className={cls.imgLogo}
        src={imgUrl}
        width={imgWidth}
        height={imgHeight}
        alt={altText}
      />
    </a>
  )
}
