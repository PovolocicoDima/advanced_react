declare module '*.scss' {
    interface ICLassNames {
        [className: string]: string
    }
    const classNames: ICLassNames;
    export = classNames;
}

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"