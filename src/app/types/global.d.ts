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

declare const __IS_DEV__ : boolean;

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";