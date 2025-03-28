import { motion } from 'framer-motion';

// Общие анимации для всех страниц
export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    },
    exit: { 
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 }
    }
};

// Анимации для элементов внутри страниц
export const itemAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
    }
};

// Анимации для карточек и блоков
export const cardAnimation = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { 
        scale: 1, 
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
};

// Анимации для изображений
export const imageAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
        scale: 1, 
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            duration: 0.8
        }
    }
};

// Анимации для кнопок
export const buttonAnimation = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
        scale: 1, 
        opacity: 1,
        transition: { duration: 0.5 }
    },
    hover: { 
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
};

// Анимации для текста
export const textAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.5 }
    }
};

// HOC для оборачивания страниц в анимации
export const withPageTransition = (WrappedComponent) => {
    return function WithPageTransition(props) {
        return (
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
            >
                <WrappedComponent {...props} />
            </motion.div>
        );
    };
};

// Анимированные компоненты
export const MotionDiv = motion.div;
export const MotionButton = motion.button;
export const MotionImage = motion.img;
export const MotionH1 = motion.h1;
export const MotionP = motion.p; 